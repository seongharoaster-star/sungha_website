import React, { useEffect, useRef, useState } from "react";
import sampalzip from "../../assets/portpolio/sampalzip.webp";
import changshimgwan from "../../assets/portpolio/changshimgwan.webp";
import yanghwadolpan from "../../assets/portpolio/yanghwadolpan.webp";
import mongtan from "../../assets/portpolio/mongtan.webp";
import darkikneonmaeul from "../../assets/portpolio/darkikneonmaeul.webp";
import angukyakbang from "../../assets/portpolio/angukyakbang.webp";
import { useNavigate } from "react-router-dom";

const Newstore = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const newStores = [
    {
      name: "창심관",
      desc: "경기 화성시 동탄",
      imageUrl: changshimgwan,
    },
    {
      name: "삼팔집",
      desc: "대전 중구 대흥동",
      imageUrl: sampalzip,
    },
    {
      name: "양화돌판삼겹",
      desc: "서울 양천구 목동",
      imageUrl: yanghwadolpan,
    },
    {
      name: "몽탄",
      desc: "제주 제주시 애월읍",
      imageUrl: mongtan,
    },
    {
      name: "안국약방",
      desc: "서울 종로구 재동",
      imageUrl: angukyakbang,
    },
    {
      name: "닭익는 마을",
      desc: "경기 하남시 망월동",
      imageUrl: darkikneonmaeul,
    },
  ];

  // 무한 슬라이드용으로 배열 2번 복제
  const loopStores = [...newStores, ...newStores];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[65vh] md:min-h-[65vh] bg-black py-12 md:py-20 overflow-hidden">
      {/* 커스텀 애니메이션 */}
      <style>
        {`
          @keyframes marqueeLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marqueeLeft 28s linear infinite;
            width: max-content;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div
        ref={sectionRef}
        className={`container mx-auto px-4 max-w-7xl transition-all duration-[1200ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-orange text-sm md:text-base tracking-[0.25em] uppercase mb-3">
            New Store
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            신규 매장
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            새롭게 함께하는 브랜드들을 소개합니다
          </p>
          <div className="w-24 h-1 bg-orange mx-auto mt-5 rounded-full" />
        </div>

        {/* 슬라이드 영역 */}
        <div className="relative">
          {/* 좌측 그라데이션 */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-black to-transparent" />
          {/* 우측 그라데이션 */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="overflow-hidden">
            <div className="marquee-track flex gap-4 md:gap-6">
              {loopStores.map((store, index) => (
                <div
                  key={`${store.name}-${index}`}
                  className="group relative w-[170px] sm:w-[200px] md:w-[260px] lg:w-[320px] shrink-0"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-zinc-900">
                    <div className="relative aspect-[6/7]">
                      <img
                        src={store.imageUrl}
                        alt={store.name}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                      />

                      {/* 오버레이 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* 뱃지 */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block rounded-full bg-orange px-3 py-1 text-xs md:text-sm font-medium text-white shadow-md">
                          신규
                        </span>
                      </div>

                      {/* 텍스트 */}
                      <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
                        <p className="text-gray-200 text-xs md:text-sm mb-2">
                          {store.desc}
                        </p>
                        <h3 className="text-white text-xl md:text-2xl font-semibold">
                          {store.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {window.innerWidth < 1024 && (
          <div className="text-right pt-4">
            <button
              onClick={() => navigate("/portpolio")}
              className="text-gray-300 text-sm"
            >
              더보기 &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newstore;
