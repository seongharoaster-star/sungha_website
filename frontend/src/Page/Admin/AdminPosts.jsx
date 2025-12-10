import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchRequest = async () => {
      try {
        const response = await axios.get(
          "https://sungha-website.onrender.com/api/request",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.log("데이터 가져오기 실패:", error);
      }
    };
    fetchRequest();
  }, []);

  // ✅ 상태 변경 함수
  const handleStatusChange = async (id, newStatus) => {
    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `https://sungha-website.onrender.com/api/request/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPosts((prev) =>
        prev.map(
          (post) => 
          post._id === id ? { ...post, status: newStatus } : post
        )
      );
    } catch (error) {
      console.error("상태 업데이트 실패:", error);
      alert("상태 변경에 실패했습니다.");
    }
  };

  // ✅ 삭제 함수
  const handleDelete = async (id) => {
    console.log("삭제 요청 들어온 id:", id);
    const token = localStorage.getItem("token");

    const result = await Swal.fire({
      title: "삭제하시겠습니까?",
      text: "이 작업은 되돌릴 수 없습니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(
        `https://sungha-website.onrender.com/api/request/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 🔥 토큰 추가 필수
          },
        }
      );

      // 🔥 posts 배열에서 삭제된 항목 제거
      setPosts((prev) => prev.filter((req) => req._id !== id));

      Swal.fire("삭제 완료!", "삭제가 완료되었습니다.", "success");
    } catch (error) {
      console.log("삭제 실패: ", error);
      Swal.fire("오류 발생", "삭제 중 문제가 발생했습니다.", "error");
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
      {currentPosts.map((post) => {
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

            <div className="flex justify-end mt-3">
              <button
              
                onClick={() => {    console.log("버튼에서 전달되는 ID:", _id);
                  handleDelete(_id)} }// 🔥 수정 완료
                className="px-4 py-1 mb-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                삭제하기
              </button>
            </div>

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
                    <th className="border px-3 py-2 bg-gray-100">로스터기</th>
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
                    <th className="border px-3 py-2 bg-gray-100">그릴</th>
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
                    <th className="border px-3 py-2 bg-gray-100">테이블</th>
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
                    <th className="border px-3 py-2 bg-gray-100">기타</th>
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
