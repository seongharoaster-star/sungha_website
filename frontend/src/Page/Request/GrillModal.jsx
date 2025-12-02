import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

// 📌 이미지들
import square_grill from "../../assets/request/square_grill.png";
import square_mesh from "../../assets/request/square_mesh.png";
import circle_grill from "../../assets/request/circle_grill.png";
import circle_mesh from "../../assets/request/circle_mesh.png";
import circle_iron from "../../assets/request/circle_iron.png";
import circle_aluminum from "../../assets/request/circle_aluminum.png";
import circle_custom from "../../assets/request/circle_custom.png";
import circle_stainless from "../../assets/request/circle_stainless.png";
import circle_stone from "../../assets/request/circle_stone.png";
import circle_mang from "../../assets/request/circle_mang.png";
import circle_dong from "../../assets/request/circle_dong.png";
import circle_dongmang from "../../assets/request/circle_dongmang.png";
import circle_sil from "../../assets/request/circle_sil.png";
import circle_home from "../../assets/request/circle_home.png";
import circle_bong from "../../assets/request/circle_bong.png";
import square_mesh_bong from "../../assets/request/square_mesh_bong.png";
import square_mesh_sil from "../../assets/request/square_mesh_sil.png";
import square_mesh_mang from "../../assets/request/square_mesh_mang.png";
import square_mesh_home from "../../assets/request/square_mesh_home.png";
import square_mesh_dongmang from "../../assets/request/square_mesh_dongmang.png";
import square_grill_aluminum from "../../assets/request/square_grill_aluminum.png";
import square_grill_cheol from "../../assets/request/square_grill_cheol.png";
import square_grill_custom from "../../assets/request/square_grill_custom.png";
import square_grill_stone from "../../assets/request/square_grill_stone.png";
import square_grill_iron from "../../assets/request/square_grill_iron.png";
import square_guard_design from "../../assets/request/square_guard_design.png";
import square_guard_flat from "../../assets/request/square_guard_flat.png";
import circle_guard_flat from "../../assets/request/circle_guard_flat.png";
import circle_guard_egg from "../../assets/request/circle_guard_egg.png";
import circle_guard_design from "../../assets/request/circle_guard_design.png";

const STORAGE_KEY = "grillModal:lastSelection";

const GrillModal = ({ onClose }) => {
  const shapes = [
    { id: "circle", name: "원형", label: "원형: 295Ø, 330Ø" },
    { id: "square", name: "사각", label: "사각: 정사각, 직사각, 장어구이기 등" },
  ];

  const circleOptions = [
    { id: "circle_grill", name: "불판", img: circle_grill },
    { id: "circle_mesh", name: "석쇠", img: circle_mesh },
  ];

  const squareOptions = [
    { id: "square_grill", name: "불판", img: square_grill },
    { id: "square_mesh", name: "석쇠", img: square_mesh },
  ];

  const circleGrillMaterials = [
    { id: "circle_aluminum", name: "알루미늄", img: circle_aluminum },
    { id: "circle_iron", name: "무쇠", img: circle_iron },
    { id: "circle_stone", name: "돌판", img: circle_stone },
    { id: "circle_stainless", name: "스텐", img: circle_stainless },
    { id: "circle_custom", name: "제작", img: circle_custom },
  ];

  const circleMeshMaterials = [
    { id: "circle_mang", name: "망", img: circle_mang },
    { id: "circle_bong", name: "봉", img: circle_bong },
    { id: "circle_dong", name: "동(구리)", img: circle_dong },
    { id: "circle_dongmang", name: "동망", img: circle_dongmang },
    { id: "circle_sil", name: "실", img: circle_sil },
    { id: "circle_home", name: "홈", img: circle_home },
  ];

  const squareGrillMaterials = [
    { id: "square_grill_aluminum", name: "알루미늄", img: square_grill_aluminum },
    { id: "square_grill_iron", name: "무쇠", img: square_grill_iron },
    { id: "square_grill_stone", name: "돌판", img: square_grill_stone },
    { id: "square_grill_cheol", name: "철판", img: square_grill_cheol },
    { id: "square_grill_custom", name: "제작", img: square_grill_custom },
  ];

  const squareMeshMaterials = [
    { id: "square_mesh_mang", name: "망", img: square_mesh_mang },
    { id: "square_mesh_bong", name: "봉", img: square_mesh_bong },
    { id: "square_mesh_dongmang", name: "동망", img: square_mesh_dongmang },
    { id: "square_mesh_sil", name: "실", img: square_mesh_sil },
    { id: "square_mesh_home", name: "홈", img: square_mesh_home },
  ];

  const handleOptions = [
    { id: "no_handle", name: "없음" },
    { id: "one_handle", name: "한손" },
    { id: "two_handle", name: "양손" },
  ];

  const circleGuardOptions = [
    { id: "circle_guard_egg", name: "공간 가드(기성)", img: circle_guard_egg },
    { id: "circle_guard_flat", name: "평면 가드(기성)", img: circle_guard_flat },
    { id: "circle_guard_design", name: "제작 가드", img: circle_guard_design },
  ];

  const squareGuardOptions = [
    { id: "square_guard_flat", name: "평면 가드(기성)", img: square_guard_flat },
    { id: "square_guard_design", name: "제작 가드", img: square_guard_design },
  ];

  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedCircleOption, setSelectedCircleOption] = useState(null);
  const [selectedSquareOption, setSelectedSquareOption] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedHandle, setSelectedHandle] = useState(null);
  const [selectedGuard, setSelectedGuard] = useState(null);
  const [isRestored, setIsRestored] = useState(false);

  const kindOptions =
    selectedShape?.id === "square" ? squareOptions : circleOptions;

  const selectedKindOption =
    selectedShape?.id === "square"
      ? selectedSquareOption
      : selectedCircleOption;

  const setSelectedKindOption = (item) => {
    if (selectedShape?.id === "square") {
      setSelectedSquareOption(item);
      setSelectedCircleOption(null);
    } else {
      setSelectedCircleOption(item);
      setSelectedSquareOption(null);
    }
    setSelectedMaterial(null);
    setSelectedHandle(null);
    setSelectedGuard(null);
  };

  const isButtonDisabled =
    !selectedShape ||
    !(selectedCircleOption || selectedSquareOption) ||
    !selectedMaterial;

  // 🔹 복원
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);

        const shapeObj =
          shapes.find((s) => s.id === saved.shapeId) ||
          shapes.find((s) => s.name === saved.shape) ||
          null;
        setSelectedShape(shapeObj);

        if (shapeObj?.id === "circle") {
          const kind =
            circleOptions.find((c) => c.id === saved.kindId) ||
            circleOptions.find((c) => c.name === saved.kind) ||
            null;
          setSelectedCircleOption(kind);
        } else if (shapeObj?.id === "square") {
          const kind =
            squareOptions.find((s) => s.id === saved.kindId) ||
            squareOptions.find((s) => s.name === saved.kind) ||
            null;
          setSelectedSquareOption(kind);
        }

        const mats = [
          ...circleGrillMaterials,
          ...circleMeshMaterials,
          ...squareGrillMaterials,
          ...squareMeshMaterials,
        ];
        setSelectedMaterial(
          mats.find((m) => m.id === saved.materialId) ||
            mats.find((m) => m.name === saved.material) ||
            null
        );

        const guards = [...circleGuardOptions, ...squareGuardOptions];
        setSelectedGuard(
          guards.find((g) => g.id === saved.guardId) ||
            guards.find((g) => g.name === saved.guard) ||
            null
        );

        setSelectedHandle(
          handleOptions.find((h) => h.id === saved.handleId) ||
            handleOptions.find((h) => h.name === saved.handle) ||
            null
        );
      }
    } catch {}
    setIsRestored(true);
  }, []);

  // 🔹 자동 저장
  useEffect(() => {
    if (!isRestored) return;

    const selectedKind = selectedCircleOption || selectedSquareOption;
    const data = {
      shape: selectedShape?.name,
      shapeId: selectedShape?.id,
      kind: selectedKind?.name,
      kindId: selectedKind?.id,
      material: selectedMaterial?.name,
      materialId: selectedMaterial?.id,
      handle: selectedHandle?.name,
      handleId: selectedHandle?.id,
      guard: selectedGuard?.name,
      guardId: selectedGuard?.id,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [
    selectedShape,
    selectedCircleOption,
    selectedSquareOption,
    selectedMaterial,
    selectedHandle,
    selectedGuard,
    isRestored,
  ]);

  const materialItems = (() => {
    if (!selectedCircleOption && !selectedSquareOption) {
      if (selectedShape?.id === "circle") return circleGrillMaterials;
      if (selectedShape?.id === "square") return squareGrillMaterials;
    }
    if (selectedCircleOption?.name === "불판") return circleGrillMaterials;
    if (selectedCircleOption?.name === "석쇠") return circleMeshMaterials;
    if (selectedSquareOption?.name === "불판") return squareGrillMaterials;
    if (selectedSquareOption?.name === "석쇠") return squareMeshMaterials;
    return [];
  })();

  const handleComplete = () => {
    if (!isButtonDisabled) {
      const selectedData = {
        shape: selectedShape?.name,
        kind: selectedCircleOption?.name || selectedSquareOption?.name,
        material: selectedMaterial?.name,
        handle: selectedHandle?.name,
        guard: selectedGuard?.name,
      };
      sessionStorage.setItem("grillConfig", JSON.stringify(selectedData));
      onClose(selectedData);
    }
  };

  // ⭐ RoasterModal의 OptionSelector 그대로 복붙 ⭐
  const OptionSelector = ({
    title,
    items,
    selectedItem,
    setSelectedItem,
    required = false,
    gridCols = 5,
  }) => {
    const handleClick = (item) => {
      setSelectedItem((prev) => (prev?.id === item.id ? null : item));
    };

    return (
      <div className="border-b py-3">
        <div className="text-left flex items-center gap-2">
          <span>{title}</span>
          {required && <span className="text-red-500 text-xs">*필수항목</span>}
        </div>

        <div
          className={`grid gap-1 ${
            gridCols === 6 ? "grid-cols-6" : "grid-cols-5"
          } max-sm:grid-cols-3`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer p-2 rounded-lg border ${
                selectedItem?.id === item.id
                  ? "border-2 border-blue-600"
                  : "border-gray-300 bg-gray-100"
              }`}
              onClick={() => handleClick(item)}
            >
              {item.img && (
                <img
                  src={item.img}
                  className="mx-auto max-sm:w-20 max-sm:h-20"
                  alt={item.id}
                />
              )}
              <p className="text-center text-sm max-sm:pt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="
      relative w-[700px] h-4/5 bg-white rounded-2xl p-8 shadow-2xl 
      max-sm:w-[95%] max-sm:h-[90%] max-sm:p-3"
    >
      <h1 className="text-4xl max-sm:text-2xl font-bold mt-8 mb-4 text-center">
        불판
      </h1>

      <button
        onClick={() => onClose(null)}
        className="absolute top-5 right-7 p-2 rounded-full hover:bg-gray-200 transition"
      >
        <X size={24} />
      </button>

      <div className="h-4/5 p-8 overflow-y-auto scrollbar-light rounded-2xl max-sm:p-2">
        <div className="grid gap-4">
          <OptionSelector
            title="1. 형태"
            items={shapes}
            selectedItem={selectedShape}
            setSelectedItem={(item) => {
              setSelectedShape(item);
              setSelectedCircleOption(null);
              setSelectedSquareOption(null);
              setSelectedMaterial(null);
              setSelectedHandle(null);
              setSelectedGuard(null);
            }}
            required
          />

          <OptionSelector
            title="2. 종류"
            items={kindOptions}
            selectedItem={selectedKindOption}
            setSelectedItem={setSelectedKindOption}
            required
          />

          <OptionSelector
            title="3. 재질 선택"
            items={materialItems}
            selectedItem={selectedMaterial}
            setSelectedItem={setSelectedMaterial}
            required
          />

          {selectedShape?.id === "circle" &&
            selectedCircleOption?.name === "불판" && (
              <OptionSelector
                title="4. 가드 (옵션)"
                items={circleGuardOptions}
                selectedItem={selectedGuard}
                setSelectedItem={setSelectedGuard}
              />
            )}

          {selectedShape?.id === "square" &&
            selectedSquareOption?.name === "불판" && (
              <OptionSelector
                title="4. 가드 (옵션)"
                items={squareGuardOptions}
                selectedItem={selectedGuard}
                setSelectedItem={setSelectedGuard}
              />
            )}

          {(selectedCircleOption?.name === "석쇠" ||
            selectedSquareOption?.name === "석쇠") && (
            <OptionSelector
              title="4. 손잡이 선택"
              items={handleOptions}
              selectedItem={selectedHandle}
              setSelectedItem={setSelectedHandle}
            />
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleComplete}
            disabled={isButtonDisabled}
            className={`px-6 py-2 max-sm:px-4 max-sm:py-2 mt-8 rounded-lg transition-colors ${
              isButtonDisabled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            선택완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrillModal;
