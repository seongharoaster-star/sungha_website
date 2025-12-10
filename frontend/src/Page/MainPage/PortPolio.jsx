import React, { useEffect, useRef, useState } from "react";
import chowon from "../../assets/chowon.jpg";
import cowoocowoo from "../../assets/cowoocowoo.jpg";
import goldpig from "../../assets/goldpig.jpg";
import jickhwajangin from "../../assets/jickhwajangin.jpg";
import mongtan from "../../assets/mongtan.jpg";
import yanginhwandae from "../../assets/yanginhwandae.jpg";
import shinsa from "../../assets/shinsa.jpg";
import majangdong from "../../assets/majagdong.jpg";
import { useNavigate } from "react-router-dom";

const Portpolio = () => {
  const executives = [
    {
      name: "금돼지식당",
      position: "미쉐린 가이드 서울 3대 맛집",
      imageUrl: goldpig,
    },
    {
      name: "직화장인",
      position: "어느 지점이든 웨이팅은 기본",
      imageUrl: jickhwajangin,
    },
    {
      name: "쿠우쿠우",
      position: "대한민국 대표 스시뷔페 No.1",
      imageUrl: cowoocowoo,
    },
    { name: "초원", position: "연예인 맛잘알 인증 맛집", imageUrl: chowon },
    { name: "몽탄", position: "우대갈비의 전설", imageUrl: mongtan },
    {
      name: "마장동김씨",
      position: "전국 삼겹살 프랜차이즈",
      imageUrl: majangdong,
    },
    {
      name: "양인환대",
      position: "프리미엄 양고기 오마카세",
      imageUrl: yanginhwandae,
    },
    { name: "신사약방", position: "숙성육 명장의 선택", imageUrl: shinsa },
  ];

  // 👉 화면 크기에 따라 보여줄 데이터 수 조절
  const [visibleExecutives, setVisibleExecutives] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        // PC 사이즈 : 전체
        setVisibleExecutives(executives);
      } else {
        // 모바일/태블릿 : 4개만
        setVisibleExecutives(executives.slice(0, 4));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 🔥 기존 IntersectionObserver 코드 그대로 유지
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-black py-20">
      <div
        ref={sectionRef}
        className={`container mx-auto px-4 max-w-6xl transition-all duration-[1200ms]
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl mt-0 md:text-3xl lg:text-5xl lg:mt-20 text-white">
            대한민국 대표 맛집들의 선택
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8 pt-14">
          {visibleExecutives.map((executive, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="text-center text-white mb-3 group-hover:-translate-y-1 transition">
                <p className="text-gray-300 text-[12px] md:text-sm lg:text-base">
                  {executive.position}
                </p>
                <h3 className="text-xl font-semibold mt-1">{executive.name}</h3>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                <img
                  src={executive.imageUrl}
                  alt={executive.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>
            </div>
          ))}
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

export default Portpolio;
