import React, { useEffect, useState } from "react";
import axios from "axios";
import roaster from "../../assets/request/roaster.png";
import grill from "../../assets/request/grill.png";
import table from "../../assets/request/table.png";
import etc from "../../assets/request/etc.png";
import RoasterModal from "./RoasterModal";
import GrillModal from "./GrillModal";
import TableModal from "./TableModal";
import OtherModal from "./Others";

const STORAGE_KEY = "tableModal:lastSelection";

const Request = () => {
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userRegion, setUserRegion] = useState("");
  const [userTableCount, setUserTableCount] = useState("");

  const [grillSelections, setGrillSelections] = useState(null);
  const [roasterSelections, setRoasterSelections] = useState(null);
  const [tableSelections, setTableSelections] = useState(null);
  const [otherSelections, setOtherSelections] = useState(null);

  const [roasterResetKey, setRoasterResetKey] = useState(0);
  const [grillResetKey, setGrillResetKey] = useState(0);
  const [tableResetKey, setTableResetKey] = useState(0);
  const [otherResetKey, setOtherResetKey] = useState(0);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        const norm = {
          material: saved?.material?.name ?? saved?.material ?? null,
          leg: saved?.leg?.name ?? saved?.leg ?? null,
          holder: saved?.holder?.name ?? saved?.holder ?? null,
          sizes: Array.isArray(saved?.sizes)
            ? saved.sizes.map(({ w, h, qty }) => ({ w, h, qty }))
            : [],
        };
        const hasAny =
          norm.material || norm.leg || norm.holder || norm.sizes?.length > 0;
        if (hasAny) setTableSelections(norm);
      }
    } catch (e) {
      console.warn("restore tableSelections failed:", e);
    }

    try {
      const storedRoaster = sessionStorage.getItem("roasterConfig");
      if (storedRoaster) setRoasterSelections(JSON.parse(storedRoaster));
    } catch (e) {
      console.warn("restore roasterSelections failed:", e);
    }

    try {
      const storedGrill = sessionStorage.getItem("grillConfig");
      if (storedGrill) setGrillSelections(JSON.parse(storedGrill));
    } catch (e) {
      console.warn("restore grillSelections failed:", e);
    }

    try {
      const storedOther = sessionStorage.getItem("othersConfig");
      if (storedOther) setOtherSelections(JSON.parse(storedOther));
    } catch (e) {
      console.warn("restore otherSelections failed:", e);
    }
  }, []);

  const handleClickItem = (id) => {
    setSelected(id);
    setIsModalOpen(true);
  };

  const isAnySelected =
    roasterSelections || grillSelections || tableSelections || otherSelections;

  const handleSubmitRequest = async () => {
    const phoneRegex = /^01[0|1|6|7|8|9]-?\d{3,4}-?\d{4}$/;

    if (
      !userName.trim() ||
      !userPhone.trim() ||
      !userRegion.trim() ||
      !userTableCount.trim()
    ) {
      alert("이름, 연락처, 지역, 테이블 수를 모두 입력해주세요.");
      return;
    }

    if (!phoneRegex.test(userPhone)) {
      alert("올바른 휴대폰 번호 형식이 아닙니다. (예: 010-1234-5678)");
      return;
    }

    const requestData = {
      name: userName,
      phone: userPhone,
      region: userRegion,
      tableCount: userTableCount,
      selections: {
        roaster: roasterSelections,
        grill: grillSelections,
        table: tableSelections,
        others: otherSelections,
      },
    };

    try {
      const response = await axios.post(
        "https://sungha-website.onrender.com/api/request",
        requestData
      );

      if (response.status === 201) {
        alert("문의가 성공적으로 접수되었습니다.");
      }
    } catch (error) {
      console.log("에러 발생: ", error);
      alert("문의 접수 중 오류가 발생했습니다.");
    }

    sessionStorage.removeItem("roasterConfig");
    sessionStorage.removeItem("roasterModal:lastSelection");
    sessionStorage.removeItem("grillConfig");
    sessionStorage.removeItem("grillModal:lastSelection");
    sessionStorage.removeItem("tableModal:lastSelection");
    sessionStorage.removeItem("othersConfig");
    sessionStorage.removeItem("otherModal:lastSelection");

    setRoasterSelections(null);
    setGrillSelections(null);
    setTableSelections(null);
    setOtherSelections(null);

    setUserName("");
    setUserPhone("");
    setUserRegion("");
    setUserTableCount("");

    setIsRequestModalOpen(false);
    setRoasterResetKey((prev) => prev + 1);
    setGrillResetKey((prev) => prev + 1);
    setTableResetKey((prev) => prev + 1);
    setOtherResetKey((prev) => prev + 1);
  };

  const renderModal = () => {
    switch (selected) {
      case "roaster":
        return (
          <RoasterModal
            key={roasterResetKey}
            onClose={(data) => {
              setIsModalOpen(false);
              if (data) setRoasterSelections(data);
            }}
          />
        );
      case "grill":
        return (
          <GrillModal
            key={grillResetKey}
            onClose={(data) => {
              setIsModalOpen(false);
              if (data) setGrillSelections(data);
            }}
          />
        );
      case "table":
        return (
          <TableModal
            key={tableResetKey}
            onClose={(data) => {
              setIsModalOpen(false);
              if (data) setTableSelections(data);
            }}
          />
        );
      case "others":
        return (
          <OtherModal
            key={otherResetKey}
            initialData={otherSelections}
            onClose={(data) => {
              setIsModalOpen(false);
              if (data) setOtherSelections(data);
            }}
          />
        );
      default:
        return null;
    }
  };

  const items = [
    { id: "roaster", img: roaster, label: "로스타" },
    { id: "grill", img: grill, label: "그릴" },
    { id: "table", img: table, label: "테이블" },
    { id: "others", img: etc, label: "기타 제품" },
  ];

  return (
    <div className="container mx-auto px-4 py-20 sm:py-32 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl mt-10 sm:text-5xl md:text-5xl font-bold text-gray-800 mb-4">
          견적문의
        </h2>
        <h2 className="text-gray-600 max-w-3xl mx-auto">
          원하시는 제품을 선택하신 후 요청버튼을 클릭해 주세요.
        </h2>

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {items.map((item) => {
              const data =
                item.id === "roaster"
                  ? roasterSelections
                  : item.id === "grill"
                  ? grillSelections
                  : item.id === "table"
                  ? tableSelections
                  : otherSelections;

              return (
                <div
                  key={item.id}
                  onClick={() => handleClickItem(item.id)}
                  className="relative"
                >
                  <img
                    src={item.img}
                    alt={item.id}
                    className={`w-full rounded-2xl border-2 object-cover transform hover:scale-[1.03] transition-transform duration-300 cursor-pointer
                    ${
                      selected === item.id
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  />

                  {data && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow">
                      완료
                    </div>
                  )}

                  {data && (
                    <div className="mt-2 text-xs sm:text-sm text-gray-700 text-center relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.id === "roaster") {
                            setRoasterSelections(null);
                            sessionStorage.removeItem("roasterConfig");
                            setRoasterResetKey((prev) => prev + 1);
                          } else if (item.id === "grill") {
                            setGrillSelections(null);
                            sessionStorage.removeItem("grillConfig");
                            setGrillResetKey((prev) => prev + 1);
                          } else if (item.id === "table") {
                            setTableSelections(null);
                            sessionStorage.removeItem(
                              "tableModal:lastSelection"
                            );
                            setTableResetKey((prev) => prev + 1);
                          } else if (item.id === "others") {
                            setOtherSelections(null);
                            sessionStorage.removeItem("othersConfig");
                            setOtherResetKey((prev) => prev + 1);
                          }
                        }}
                        className="absolute right-3 hover:bg-gray-100 hover:rounded-md px-1 text-gray-500 text-xs font-bold"
                      >
                        x
                      </button>

                      {data.shape && <p>형태: {data.shape}</p>}
                      {data.duct && <p>연기 배출: {data.duct}</p>}
                      {data.fuel && <p>연료: {data.fuel}</p>}
                      {data.knob && <p>코크박스 위치: {data.knob}</p>}
                      {data.kind && <p>종류: {data.kind}</p>}
                      {data.material && <p>재질: {data.material}</p>}
                      {data.handle && <p>손잡이: {data.handle}</p>}
                      {data.guard && <p>가드: {data.guard}</p>}
                      {data.holder && <p>하부장: {data.holder}</p>}
                      {data.leg && <p>다리: {data.leg}</p>}
                      {data.cart && <p>카트: {data.cart}</p>}
                      {data.igniter && <p>착화기: {data.igniter}</p>}
                      {data.etc && <p>기타: {data.etc.join(", ")}</p>}
                      {data.sizes?.length > 0 && (
                        <p>
                          사이즈:{" "}
                          {data.sizes.map(
                            (s, idx) =>
                              `${s.w}×${s.h} - ${s.qty}개${
                                idx < data.sizes.length - 1 ? ", " : ""
                              }`
                          )}
                        </p>
                      )}
                      {data.options?.length > 0 && (
                        <p>옵션: {data.options.join(", ")}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsRequestModalOpen(true)}
              disabled={!isAnySelected}
              className={`px-10 py-3 text-lg rounded-xl transition ${
                isAnySelected
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              견적 요청
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {renderModal()}
        </div>
      )}

      {isRequestModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-[400px] text-center relative mx-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">견적 요청</h2>
            <p className="text-sm text-gray-600 mb-6">
              담당자가 빠르게 연락드릴 수 있도록 정보를 입력해주세요.
            </p>

            <input
              type="text"
              placeholder="이름"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border rounded-lg w-full px-4 py-2 mb-3 text-sm"
            />
            <input
              type="tel"
              placeholder="연락처 (예: 010-1234-5678)"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="border rounded-lg w-full px-4 py-2 mb-3 text-sm"
            />
            <input
              type="text"
              placeholder="지역 (예: 서울 강남구 / 부산 해운대 등)"
              value={userRegion}
              onChange={(e) => setUserRegion(e.target.value)}
              className="border rounded-lg w-full px-4 py-2 mb-3 text-sm"
            />
            <input
              type="number"
              min={1}
              placeholder="테이블 수"
              value={userTableCount}
              onChange={(e) => setUserTableCount(e.target.value)}
              className="border rounded-lg w-full px-4 py-2 mb-6 text-sm"
            />

            <div className="flex justify-center gap-3">
              <button
                onClick={handleSubmitRequest}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                요청하기
              </button>
              <button
                onClick={() => setIsRequestModalOpen(false)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
