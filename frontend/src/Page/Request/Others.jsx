import React, { useCallback, useMemo, useState, useEffect } from "react";
import yeontan5gu from "../../assets/request/5gu.png";
import circle_cart from "../../assets/request/circle_cart.png";
import squre_cart from "../../assets/request/squre_cart.png";
import yeontan7gu from "../../assets/request/7gu.png";
import two_cart from "../../assets/request/two_cart.png";
import suttong_dubgae from "../../assets/request/suttong_dubgae.png";
import bulpan_deulgae from "../../assets/request/bulpan_deulgae.png";
import suttong_deulgae from "../../assets/request/suttong_deulgae.png";
import deulgaegyeomdeobgae from "../../assets/request/deulgaegyeomdeobgae.png";
import square_liftcover from "../../assets/request/square_liftcover.png";
import { X } from "lucide-react";

const STORAGE_KEY = "otherModal:lastSelection";

const CARTS = [
  { id: "원형 불판카트", img: circle_cart, name: "원형 불판카트" },
  { id: "사각 불판카트", img: squre_cart, name: "사각 불판카트" },
  { id: "2단 불판카트", img: two_cart, name: "2단 불판카트" },
];

const IGNITERS = [
  { id: "5구착화기", name: "5구착화기", img: yeontan5gu },
  { id: "7구착화기", name: "7구착화기", img: yeontan7gu },
];

const ETC = [
  { id: "불판 들게", name: "불판 들게", img: bulpan_deulgae },
  { id: "숯통 들게", name: "숯통 들게", img: suttong_deulgae },
  { id: "숯통 덮개", name: "숯통 덮개", img: suttong_dubgae },
  {
    id: "원형 숯통\n리프트커버",
    name: "원형 숯통\n리프트커버",
    img: deulgaegyeomdeobgae,
  },
  {
    id: "사각 숯통\n리프트커버",
    name: "사각 숯통\n리프트커버",
    img: square_liftcover,
  },
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
        "flex flex-col cursor-pointer p-2 rounded-lg border bg-gray-100 outline-none transition",
        selected ? "border-2 border-blue-600" : "border-gray-300",
        disabled && "opacity-50 pointer-events-none"
      )}
    >
      {item.img && (
        <img src={item.img} className="mx-auto block" alt={item.name || item.id} />
      )}
      <p className="flex items-center justify-center text-center mt-1 min-h-[30px] whitespace-pre-line leading-tight">
        {item.name}
      </p>
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

      {/* 📱 모바일: 3컬럼, 데스크탑: 기존 유지 */}
      <div
        className={cn(
          "grid gap-1",
          gridClass,
          "max-sm:grid-cols-3",
          disabled && "opacity-50 pointer-events-none"
        )}
      >
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

const OtherModal = ({ onClose, initialData }) => {
  const [selectedCart, setSelectedCart] = useState(
    initialData?.cart
      ? CARTS.find((c) => c.name === initialData.cart) ?? null
      : null
  );
  const [selectedIgniter, setSelectedIgniter] = useState(
    initialData?.igniter
      ? IGNITERS.find((i) => i.name === initialData.igniter) ?? null
      : null
  );
  const [selectedEtc, setSelectedEtc] = useState(
    initialData?.etc ? ETC.filter((e) => initialData.etc.includes(e.name)) : []
  );

  useEffect(() => {
    try {
      const raw =
        sessionStorage.getItem("othersConfig") ||
        sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);

      if (saved.cart) {
        const cart = CARTS.find((l) => l.id === saved.cart);
        if (cart) setSelectedCart(cart);
      }
      if (saved.igniter) {
        const igniter = IGNITERS.find((h) => h.id === saved.igniter);
        if (igniter) setSelectedIgniter(igniter);
      }
      if (Array.isArray(saved.etc)) {
        const restoredEtc = ETC.filter((item) => saved.etc.includes(item.id));
        setSelectedEtc(restoredEtc);
      }
    } catch (e) {
      console.warn("restore failed:", e);
    }
  }, []);

  useEffect(() => {
    try {
      const data = {
        cart: selectedCart ? selectedCart.id : null,
        igniter: selectedIgniter ? selectedIgniter.id : null,
        etc: selectedEtc.map((e) => e.id),
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("persist failed:", e);
    }
  }, [selectedCart, selectedIgniter, selectedEtc]);

  const handleComplete = () => {
    const payload = {
      cart: selectedCart?.name,
      igniter: selectedIgniter?.name,
      etc: selectedEtc.map((e) => e.name),
    };

    try {
      sessionStorage.setItem("othersConfig", JSON.stringify(payload));
    } catch (e) {
      console.warn("persist othersConfig failed:", e);
    }

    onClose?.(payload);
  };

  return (
    <div
      className="
        relative w-[700px] h-4/5 bg-white rounded-2xl p-8 shadow-2xl
        max-sm:w-[95%] max-sm:h-[90%] max-sm:p-4
      "
      role="dialog"
      aria-modal="true"
      aria-label="기타 옵션 선택"
    >
      <h1 className="text-4xl font-bold mt-2 mb-4 text-center max-sm:text-2xl">
        기타 주방용품
      </h1>

      <button
        onClick={() => onClose?.()}
        className="
          absolute top-5 right-7 p-2 rounded-full hover:bg-gray-200 transition
          max-sm:top-3 max-sm:right-3
        "
      >
        <X size={24} />
      </button>

      <div className="h-4/5 p-4 overflow-y-auto rounded-2xl scrollbar-light max-sm:p-2">
        <div className="grid gap-4">
          <OptionSection
            title="1. 불판 보관 카트"
            items={CARTS}
            selectedItem={selectedCart}
            setSelectedItem={setSelectedCart}
          />

          <OptionSection
            title="2. 연탄착화기"
            items={IGNITERS}
            selectedItem={selectedIgniter}
            setSelectedItem={setSelectedIgniter}
          />

          <OptionSection
            title="3. 기타"
            items={ETC}
            selectedItem={selectedEtc}
            setSelectedItem={setSelectedEtc}
            allowMultiple={true}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleComplete}
            disabled={!selectedCart && !selectedIgniter && selectedEtc.length === 0}
            className={cn(
              "px-6 py-2 mt-6 rounded-lg transition-colors max-sm:w-full",
              !selectedCart && !selectedIgniter && selectedEtc.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            선택완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherModal;
