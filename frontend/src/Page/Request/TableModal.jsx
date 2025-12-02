import React, { useCallback, useMemo, useState } from "react";
import pipeleg from "../../assets/request/pipeleg.png";
import drumtong from "../../assets/request/drumtong.png";
import totalleg from "../../assets/request/totalleg.png";
import spoon from "../../assets/request/spoon.png";
import habujang from "../../assets/request/habujang.png";
import cabinet from "../../assets/request/cabinet.png";
import { X } from "lucide-react";

const STORAGE_KEY = "tableModal:lastSelection";

const LEGS = [
  {
    id: "파이프다리",
    img: pipeleg,
    name: "파이프다리",
  },
  {
    id: "드럼통다리",
    img: drumtong,
    name: "드럼통다리",
  },
  {
    id: "캐비닛다리",
    img: cabinet,
    name: "캐비닛다리",
  },
  {
    id: "하부장일체형",
    name: "하부장일체형",
    img: totalleg,
  },
];

const HOLDERS = [
  { id: "수저통", name: "수저통", img: spoon },
  {
    id: "하부장",
    name: "하부장",
    img: habujang,
  },
];

const MATERIALS = [
  { id: "필름지", name: "필름지" },
  {
    id: "멜라민",
    name: "멜라민",
  },
  {
    id: "투톤멜라민",
    name: "투톤멜라민",
  
  },
  {
    id: "스텐",
    name: "스텐",
  },
  {
    id: "대리석",
    name: "대리석",
  },
  {
    id: "세라믹",
    name: "세라믹",
  },
];

// ✅ 새 사이즈 옵션 (원하면 자유롭게 수정 가능)
const HEIGHTS = [700, 750, 800, 850, 900, 1000, 1100];
const WIDTHS = [
  900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
];

const cn = (...classes) => classes.filter(Boolean).join(" ");

const OptionCard = ({ item, selected, onSelect, disabled }) => {
  const handleKey = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={!!selected}
      onClick={() => !disabled && onSelect(item)}
      onKeyDown={handleKey}
      className={cn(
        "cursor-pointer p-2 rounded-lg border bg-gray-100 outline-none transition",
        selected ? "border-2 border-blue-600" : "border-gray-300",
        disabled && "opacity-50 pointer-events-none"
      )}
    >
      {item.img && (
        <img src={item.img} className="mx-auto" alt={item.name || item.id} />
      )}
      <p className="text-center mt-1">{item.name}</p>
    </div>
  );
};

const OptionSection = ({
  title,
  items,
  selectedItem,
  setSelectedItem,
  allowMultiple = false,
  gridCols = 5,
  disabled = false,
}) => {
  const isSelected = useCallback(
    (it) =>
      allowMultiple
        ? selectedItem.some((o) => o.id === it.id)
        : selectedItem?.id === it.id,
    [allowMultiple, selectedItem]
  );

  const handleSelect = useCallback(
    (it) => {
      if (disabled) return;
      if (allowMultiple) {
        setSelectedItem((prev) =>
          prev.some((o) => o.id === it.id)
            ? prev.filter((o) => o.id !== it.id)
            : [...prev, it]
        );
      } else {
        setSelectedItem((prev) => (prev?.id === it.id ? null : it));
      }
    },
    [allowMultiple, disabled, setSelectedItem]
  );

  const gridClass = useMemo(
    () => (gridCols === 6 ? "grid-cols-6" : "grid-cols-5"),
    [gridCols]
  );

  return (
    <section className="border-b py-3">
      <div className="text-left flex items-center gap-2 mb-2">
        <span className="font-medium">{title}</span>
      </div>

      <div className={cn("grid gap-1", gridClass, "max-sm:grid-cols-3")}>
        {items.map((it) => (
          <OptionCard
            key={it.id}
            item={it}
            selected={isSelected(it)}
            onSelect={handleSelect}
            disabled={disabled}
          />
        ))}
      </div>
    </section>
  );
};

const SizeSectionV2 = ({ lines, setLines }) => {
  const [w, setW] = useState(1200);
  const [h, setH] = useState(800);
  const [qty, setQty] = useState(1);

  const keyOf = (W, H) => `${W}x${H}`;

  const addLine = () => {
    const safeQty = Math.max(1, Number(qty) || 1);
    setLines((prev) => {
      const k = keyOf(w, h);
      const exists = prev.find((row) => row.key === k);
      if (exists) {
        return prev.map((row) =>
          row.key === k ? { ...row, qty: row.qty + safeQty } : row
        );
      }
      return [...prev, { key: k, w, h, qty: safeQty }];
    });
    setQty(1);
  };

  const updateQty = (k, value) => {
    const v = Math.max(1, Number(value) || 1);
    setLines((prev) =>
      prev.map((row) => (row.key === k ? { ...row, qty: v } : row))
    );
  };

  const removeLine = (k) => {
    setLines((prev) => prev.filter((row) => row.key !== k));
  };

  return (
    <section className="border-b py-3">
      <div className="text-left flex items-center gap-2 mb-3">
        <span className="font-medium">2. 사이즈 (단위: mm)</span>
      </div>

      {/* 입력 컨트롤 */}
      <div
        className="
    grid items-center gap-2
    [grid-template-columns:120px_24px_120px_minmax(200px,auto)_1fr_auto]

    max-sm:flex max-sm:flex-col max-sm:gap-3
  "
      >
        {/* 가로 */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm text-gray-600 w-10">가로</label>
          <select
            value={w}
            onChange={(e) => setW(Number(e.target.value))}
            className="border rounded px-3 py-2 w-[92px]"
          >
            {WIDTHS.map((W) => (
              <option key={W} value={W}>
                {W}
              </option>
            ))}
          </select>
        </div>

        {/* X 기호 → 모바일에서 숨김 */}
        <div className="text-center text-gray-500 max-sm:hidden">×</div>

        {/* 세로 */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm text-gray-600 w-10">세로</label>
          <select
            value={h}
            onChange={(e) => setH(Number(e.target.value))}
            className="border rounded px-3 py-2 w-[92px]"
          >
            {HEIGHTS.map((H) => (
              <option key={H} value={H}>
                {H}
              </option>
            ))}
          </select>
        </div>

        {/* 수량 */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm text-gray-600 w-12 ml-4 max-sm:ml-0">
            수량
          </label>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="border rounded px-3 py-2 w-[84px] text-right"
          />
          <span className="text-gray-500 text-sm">개</span>
        </div>

        {/* spacer (데스크탑에서만 필요) */}
        <div className="max-sm:hidden" />

        {/* 추가 버튼 */}
        <div className="justify-self-end max-sm:w-full">
          <button
            type="button"
            onClick={addLine}
            className="px-4 py-2 w-full max-sm:w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            추가
          </button>
        </div>
      </div>

      {lines.length > 0 && (
        <div className="mt-4">
          <div className="mt-2 space-y-2">
            {lines.map((row) => (
              <div
                key={row.key}
                className="
    grid items-center gap-2 bg-gray-50 rounded-lg px-2 py-2 border text-center
    [grid-template-columns:120px_24px_120px_minmax(200px,auto)_1fr_auto]

    max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:text-left
  "
              >
                {/* 가로 */}
                <div>{row.w}</div>

                {/* × */}
                <div className="text-gray-500">×</div>

                {/* 세로 */}
                <div>{row.h}</div>

                {/* 수량 */}
                <div className="whitespace-nowrap">{row.qty}개</div>

                {/* spacer (모바일 X) */}
                <div className="max-sm:hidden" />

                {/* 삭제 버튼 */}
                <div className="justify-self-end max-sm:ml-3">
                  <button
                    type="button"
                    onClick={() => removeLine(row.key)}
                    className="px-3 py-1 rounded border hover:bg-gray-100"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

const TableModal = ({ onClose }) => {
  const [selectedLeg, setSelectedLeg] = useState(null);
  const [selectedHolder, setSelectedHolder] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  // ✅ 새로운 사이즈 상태: (w,h,qty) 라인 배열
  const [sizeLines, setSizeLines] = useState(() => {
    try {
      const raw = sessionStorage.getItem("tableModal:lastSelection");
      if (!raw) return [];
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.sizes)) {
        return saved.sizes.map(({ w, h, qty }) => ({
          key: `${w}x${h}`,
          w,
          h,
          qty,
        }));
      }
      return [];
    } catch (e) {
      console.warn("restore failed:", e);
      return [];
    }
  });

  const isHolderDisabled = selectedLeg?.id === "하부장일체형";

  // 복원
  React.useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);

      if (saved.leg) setSelectedLeg(saved.leg);
      if (saved.holder) setSelectedHolder(saved.holder);
      if (saved.material) setSelectedMaterial(saved.material);

      if (Array.isArray(saved.sizes)) {
        setSizeLines(
          saved.sizes.map(({ w, h, qty }) => ({
            key: `${w}x${h}`,
            w,
            h,
            qty,
          }))
        );
      } else if (Array.isArray(saved.sizeLines)) {
        setSizeLines(saved.sizeLines);
      }
    } catch (e) {
      console.warn("restore failed:", e);
    }
  }, []);

  React.useEffect(() => {
    if (isHolderDisabled && selectedHolder) {
      setSelectedHolder(null);
    }
  }, [isHolderDisabled, selectedHolder]);

  // 저장
  React.useEffect(() => {
    const data = {
      leg: selectedLeg,
      holder: selectedHolder,
      material: selectedMaterial,
      sizes: sizeLines.map(({ w, h, qty }) => ({ w, h, qty })),
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("persist failed:", e);
    }
  }, [selectedLeg, selectedHolder, selectedMaterial, sizeLines]);

  const handleComplete = () => {
    if (selectedMaterial && sizeLines.length === 0) {
      alert("사이즈(수량)를 선택해주세요.");
      return;
    }
    const payload = {
      leg: selectedLeg?.name,
      holder: selectedHolder?.name,
      material: selectedMaterial?.name,
      sizes: sizeLines.map(({ w, h, qty }) => ({ w, h, qty })),
    };
    onClose?.(payload);
  };

  return (
    <div
      className="relative w-[700px] h-4/5 bg-white rounded-2xl p-8 shadow-2xl
  max-sm:w-[95%] max-sm:h-[90%] max-sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="테이블 옵션 선택"
    >
      <h1 className="text-4xl font-bold mt-2 mb-4 text-center">테이블</h1>

      <button
        onClick={() => onClose?.()}
        className="absolute top-5 right-7 p-2 rounded-full hover:bg-gray-200 transition"
        aria-label="닫기"
        title="닫기"
      >
        <X size={24} />
      </button>

      <div className="h-4/5 p-4 overflow-y-auto rounded-2xl scrollbar-light">
        <div className="grid gap-4">
          <OptionSection
            title="1. 상판"
            items={MATERIALS}
            selectedItem={selectedMaterial}
            setSelectedItem={setSelectedMaterial}
            gridCols={6}
          />

          {/* ✅ 새로운 사이즈 섹션 */}
          <SizeSectionV2 lines={sizeLines} setLines={setSizeLines} />

          <OptionSection
            title="3. 다리"
            items={LEGS}
            selectedItem={selectedLeg}
            setSelectedItem={setSelectedLeg}
          />

          <OptionSection
            title="4. 수저통 및 하부장"
            items={HOLDERS}
            selectedItem={selectedHolder}
            setSelectedItem={setSelectedHolder}
            disabled={isHolderDisabled}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleComplete}
            className={cn(
              "px-6 py-2 mt-6 rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            선택완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
