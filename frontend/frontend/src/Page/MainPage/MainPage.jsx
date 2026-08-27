import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import Portpolio from "./PortPolio";
import Banner from "./Banner";
import NewStore from "./NewStore";

const STORAGE_KEY = "hideMainPopup";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  // 최초 로드 시 localStorage 확인
  useEffect(() => {
    const isHidden = localStorage.getItem(STORAGE_KEY);
    if (!isHidden) {
      setIsOpen(true);
    }
  }, []);

  const close = () => {
    if (dontShow) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: 9999,
            padding: 40,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: 700,
              maxWidth: "90vw",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={close}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                fontSize: 18,
                zIndex: 2,
              }}
            >
              ✕
            </button>

            {/* 팝업 이미지 */}
            <img
              src="/popup.webp"
              alt="팝업"
              style={{ width: "100%", display: "block" }}
            />

            {/* 하단 옵션 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 8,
                padding: "12px 16px",
                fontSize: 14,
              }}
            >
              <input
                type="checkbox"
                id="dontShow"
                checked={dontShow}
                onChange={(e) => setDontShow(e.target.checked)}
              />
              <label htmlFor="dontShow" style={{ cursor: "pointer" }}>
                이 창을 다시 띄우지 않음
              </label>
            </div>
          </div>
        </div>
      )}

      <Banner />
      <Portpolio />
      <NewStore />
      <Hero />
      <Contact />
    </div>
  );
};

export default MainPage;
