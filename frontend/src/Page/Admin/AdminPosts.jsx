import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get("https://sungha-website.onrender.com/api/request", {
          withCredentials: true,
        });
        setPosts(response.data);
      } catch (error) {
        console.log("데이터 가져오기 실패:", error);
      }
    };
    fetchRequest();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `https://sungha-website.onrender.com/api/request/${id}`,
        {
          status: newStatus,
        },
        {
          withCredentials: true,
        }
      );

      setPosts((prev) =>
        prev.map((post) =>
          post._id === id ? { ...post, status: newStatus } : post
        )
      );
    } catch (error) {
      console.error("상태 업데이트 실패:", error);
      alert("상태 변경에 실패했습니다.");
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIdx, startIdx + postsPerPage);

  if (!posts.length)
    return <p className="text-center py-10">데이터가 없습니다.</p>;

  return (
    <div className="p-6 space-y-6">
      {currentPosts.map((post, index) => {
        const {
          _id,
          name,
          phone,
          region,
          tableCount,
          createdAt,
          status,
          selections = {},
        } = post;

        return (
          <div
            key={_id}
            className="p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">견적 요청 상세</h2>
            <table className="w-full table-auto border border-gray-300 text-sm">
              <tbody>
                <tr>
                  <th className="border px-3 py-2 bg-gray-100 text-left">
                    이름
                  </th>
                  <td className="border px-3 py-2">{name}</td>
                </tr>
                <tr>
                  <th className="border px-3 py-2 bg-gray-100 text-left">
                    연락처
                  </th>
                  <td className="border px-3 py-2">{phone}</td>
                </tr>
                <tr>
                  <th className="border px-3 py-2 bg-gray-100 text-left">
                    지역
                  </th>
                  <td className="border px-3 py-2">{region}</td>
                </tr>
                <tr>
                  <th className="border px-3 py-2 bg-gray-100 text-left">
                    테이블 수
                  </th>
                  <td className="border px-3 py-2">{tableCount}</td>
                </tr>
                <tr>
                  <th className="border px-3 py-2 bg-gray-100 text-left">
                    요청일
                  </th>
                  <td className="border px-3 py-2">{formatDate(createdAt)}</td>
                </tr>
                <tr>
                  <th className="border px-3 py-2 bg-gray-100 text-left">
                    상태
                  </th>
                  <td className="border px-3 py-2">
                    <select
                      value={status}
                      onChange={(e) => handleStatusChange(_id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="대기중">대기중</option>
                      <option value="처리중">처리중</option>
                      <option value="완료">완료</option>
                    </select>
                  </td>
                </tr>

                {selections.roaster && (
                  <tr>
                    <th className="border px-3 py-2 bg-gray-100 text-left">
                      로스터기
                    </th>
                    <td className="border px-3 py-2">
                      형태: {selections.roaster.shape} / 연기:{" "}
                      {selections.roaster.duct} / 연료:{" "}
                      {selections.roaster.fuel} / 코크박스:{" "}
                      {selections.roaster.knob}
                      <br />
                      옵션: {selections.roaster.options?.join(", ")}
                    </td>
                  </tr>
                )}

                {selections.grill && (
                  <tr>
                    <th className="border px-3 py-2 bg-gray-100 text-left">
                      그릴
                    </th>
                    <td className="border px-3 py-2">
                      형태: {selections.grill.shape} / 종류:{" "}
                      {selections.grill.kind} / 재질:{" "}
                      {selections.grill.material} / 가드:{" "}
                      {selections.grill.guard}
                    </td>
                  </tr>
                )}

                {selections.table && (
                  <tr>
                    <th className="border px-3 py-2 bg-gray-100 text-left">
                      테이블
                    </th>
                    <td className="border px-3 py-2">
                      재질: {selections.table.material} / 다리:{" "}
                      {selections.table.leg} / 하부장: {selections.table.holder}
                      <br />
                      사이즈:{" "}
                      {selections.table.sizes.map((s, idx) => (
                        <span key={idx}>
                          {s.w}×{s.h} - {s.qty}개
                          {idx < selections.table.sizes.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </td>
                  </tr>
                )}

                {selections.others && (
                  <tr>
                    <th className="border px-3 py-2 bg-gray-100 text-left">
                      기타
                    </th>
                    <td className="border px-3 py-2">
                      불판카트: {selections.others.cart} / 착화기:{" "}
                      {selections.others.igniter}
                      <br />
                      기타: {selections.others.etc?.join(", ")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      })}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPosts;
