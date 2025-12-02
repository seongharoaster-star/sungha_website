import React, { useState, useEffect } from "react";
import circle from "../../assets/request/circle.png";
import twin from "../../assets/request/twin.png";
import shellfish from "../../assets/request/shellfish.png";
import sheep from "../../assets/request/sheep.png";
import square from "../../assets/request/square.png";
import side from "../../assets/request/side.png";
import top from "../../assets/request/top.png";
import laser from "../../assets/request/laser.png";
import plating from "../../assets/request/plating.png";
import wamer from "../../assets/request/wamer.png";
import windmotor from "../../assets/request/windmotor.png";
import { X } from "lucide-react";

const STORAGE_KEY = "roasterModal:lastSelection";

const RoasterModal = ({ onClose }) => {
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedDuct, setSelectedDuct] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedKnob, setSelectedKnob] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);


const shapes = [
  {
    id: "circle",
    img: circle,
    name: "원형",
    label: "원형: 가장 보편적인 형태로, 295Ø·330Ø 기본 사이즈 지원"
  },
  {
    id: "square",
    img: square,
    name: "사각",
    label: "사각: 정사각·직사각 등 다양한 형태의 커스터마이징 가능"
  },
  {
    id: "twin",
    img: twin,
    name: "트윈",
    label: "트윈: 한 로스터에 화구 2개를 구성한 듀얼형 구조"
  },
  {
    id: "shellfish",
    img: shellfish,
    name: "조개",
    label: "조개: 조개구이 및 찜 조리가 가능한 고화력 로스타(사각 제작 가능)"
  },
  {
    id: "sheep",
    img: sheep,
    name: "양꼬치",
    label: "양꼬치: 자동 회전 시스템이 적용된 꼬치 전용 구조"
  }
];


  const ducts = [
    { id: "up", name: "상향식", label: "상향식: 천장 닥트 공사 필요" },
    { id: "down", name: "하향식", label: "하향식: 바닥 닥트 공사 필요" },
    {
      id: "cobra",
      name: "코브라",
      label:
        "코브라: 상향식 로스타를 사용하지만, 하향식와 같이 바닥 닥트 공사 필요",
    },
    {
      id: "no",
      name: "무연",
      label: "무연: 공중 분사로 연기를 가리는 구조로, 기름이 적은 육류에 권장",
    },
  ];

  const fuels = [
    { id: "가스", name: "가스", label: "가스: LNG, LPG" },
    { id: "숯불", name: "숯불", label: "숯불: 숯불 전용" },
    {
      id: "가스착숯",
      name: "가스착숯",
      label: "가스착숯: 가스로 숯을 착화하는 방식으로, 밖에서 숯을 들여올 필요없이 편리하게 사용",
    },
    { id: "부탄", name: "부탄", label: "부탄: 별도 공사 필요없지만 화력 다소 약함" },
    { id: "세라믹", name: "세라믹", label: "세라믹: 세라믹 히터 발열" },
    { id: "연탄", name: "연탄", label: "연탄: 연탄 전용" },
  ];

  const knobs = [
    {
      id: "상부식",
      img: top,
      name: "상부식",
      label: "상부식: 로스타와 일체형으로, 손님이 직접 구워먹는 매장에 적합한 방식",
    },
    {
      id: "측면식",
      img: side,
      name: "측면식",
      label: "측면식: 상판 아래 측면에 위치해, 직원이 구워주는 매장에 적합한 방식",
    },
  ];

  const options = [
    {
      id: "송풍모터",
      img: windmotor,
      name: "송풍모터",
      label: "송풍모터: 숯불 사용 시 공기를 공급해 약해진 불꽃을 다시 살리는 기능",
    },
    {
      id: "워머",
      img: wamer,
      name: "워머",
      label: "워머: 익은 고기를 올려두어 따뜻하게 보관하는 보온 받침대",
    },
    {
      id: "상호각인",
      img: laser,
      name: "상호각인",
      label: "상호각인: 로스타 테두리에 로고·상호 레이저 마킹",
    },
    {
      id: "도금",
      img: plating,
      name: "도금",
      label: "도금: 스텐 기본, 골드/동/브론즈 가능",
    },
  ];

  const isKnobDisabled =
    selectedFuel?.id === "숯불" || selectedFuel?.id === "연탄";

  const [restored, setRestored] = useState(false);

  useEffect(() => {
    if (restored) return;
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);

      if (saved.shape)
        setSelectedShape(shapes.find((s) => s.name === saved.shape));
      if (saved.duct) setSelectedDuct(ducts.find((d) => d.name === saved.duct));
      if (saved.fuel) setSelectedFuel(fuels.find((f) => f.name === saved.fuel));
      if (saved.knob) setSelectedKnob(knobs.find((k) => k.name === saved.knob));
      if (saved.options?.length) {
        const restoredOptions = options.filter((opt) =>
          saved.options.includes(opt.name)
        );
        setSelectedOptions(restoredOptions);
      }
      setRestored(true);
    } catch (e) {
      console.warn("restore failed:", e);
    }
  }, [restored]);

  useEffect(() => {
    if (isKnobDisabled) setSelectedKnob(null);
  }, [isKnobDisabled]);

  useEffect(() => {
    const data = {
      shape: selectedShape?.name,
      duct: selectedDuct?.name,
      fuel: selectedFuel?.name,
      knob: selectedKnob?.name,
      options: selectedOptions.map((opt) => opt.name),
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("persist failed:", e);
    }
  }, [
    selectedShape,
    selectedDuct,
    selectedFuel,
    selectedKnob,
    selectedOptions,
  ]);

  const handleComplete = () => {
    if (!isButtonDisabled) {
      const payload = {
        shape: selectedShape?.name,
        duct: selectedDuct?.name,
        fuel: selectedFuel?.name,
        knob: selectedKnob?.name || null,
        options: selectedOptions.map((opt) => opt.name),
      };
      sessionStorage.setItem("roasterConfig", JSON.stringify(payload));
      onClose(payload);
    }
  };

  const filteredDucts =
    selectedShape?.id === "shellfish"
      ? ducts.filter((d) => d.id === "up")
      : ducts;

  const OptionSelector = ({
    title,
    items,
    selectedItem,
    setSelectedItem,
    allowMultiple = false,
    disabled = false,
    required = false,
    gridCols = 5,
  }) => {
    const handleClick = (item) => {
      if (disabled) return;
      if (allowMultiple) {
        setSelectedItem((prev) =>
          prev.some((opt) => opt.id === item.id)
            ? prev.filter((opt) => opt.id !== item.id)
            : [...prev, item]
        );
      } else {
        setSelectedItem(item);
      }
    };

    return (
      <div className="border-b py-3">
        <div className="text-left flex items-center gap-2">
          <span>{title}</span>
          {required && <span className="text-red-500 text-xs">*필수항목</span>}
        </div>

        {/* GRID: 모바일에서 2컬럼 */}
        <div
          className={`grid gap-1 ${
            disabled ? "opacity-50 pointer-events-none" : ""
          } ${gridCols === 6 ? "grid-cols-6" : "grid-cols-5"} max-sm:grid-cols-3`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer p-2 rounded-lg border ${
                allowMultiple
                  ? selectedItem.some((opt) => opt.id === item.id)
                    ? "border-2 border-blue-600"
                    : "border-gray-300 bg-gray-100"
                  : selectedItem?.id === item.id
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

        {allowMultiple
          ? selectedItem.length > 0 && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg text-left text-sm">
                {selectedItem.map((opt) => (
                  <p key={opt.id}>✅ {opt.label}</p>
                ))}
              </div>
            )
          : selectedItem && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg text-left text-sm">
                <p>✅ {selectedItem.label}</p>
              </div>
            )}
      </div>
    );
  };

  const isButtonDisabled = !selectedShape || !selectedDuct || !selectedFuel;

  return (
    <div
      className="
      relative w-[700px] h-4/5 bg-white rounded-2xl p-8 shadow-2xl 
      max-sm:w-[95%] max-sm:h-[90%] max-sm:p-3"
    >
      <h1 className="text-4xl max-sm:text-2xl font-bold mt-8 mb-4 text-center">
        로스타
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
            setSelectedItem={setSelectedShape}
            required
          />
          <OptionSelector
            title="2. 연기 배출 방식"
            items={filteredDucts}
            selectedItem={selectedDuct}
            setSelectedItem={setSelectedDuct}
            required
          />
          <OptionSelector
            title="3. 연료"
            items={fuels}
            selectedItem={selectedFuel}
            setSelectedItem={setSelectedFuel}
            required
            gridCols={6}
          />
          <OptionSelector
            title="4. 코크박스(불조절노브) 위치"
            items={knobs}
            selectedItem={selectedKnob}
            setSelectedItem={setSelectedKnob}
            disabled={isKnobDisabled}
          />
          <OptionSelector
            title="* 추가 옵션"
            items={options}
            selectedItem={selectedOptions}
            setSelectedItem={setSelectedOptions}
            allowMultiple
          />
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

export default RoasterModal;
