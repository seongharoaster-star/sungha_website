import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mainpage from "../../assets/mainImgxl.png";
import mainpageMobile from "../../assets/mainImg_mobile.png";
import mainpageTablet from "../../assets/mainImg_tablet.png"; // ⭐ 추가
import { IoConstructSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Hero = () => {
  const cards = [
    {
      icon: <IoConstructSharp />,
      number: "1,000+",
      label: "설치 완료",
      explain: "수많은 고객이 택한 신뢰의 기술력",
    },
    {
      icon: <BsArrowRepeat />,
      number: "92%",
      label: "재주문율",
      explain: "고객 경험이 증명한 높은 만족도",
    },
    {
      icon: <MdAccessTime />,
      number: "15년+",
      label: "업계 경력",
      explain: "풍부한 경험으로\n차별화된 결과 제공",
    },
    {
      icon: <BiSupport />,
      number: "24/7",
      label: "기술 지원",
      explain: "문제 발생 시 언제든 빠른 대응 지원",
    },
  ];

  // ⭐ 모바일·태블릿·PC 3단계 분기
  const [deviceType, setDeviceType] = useState(
    window.innerWidth < 450
      ? "mobile"
      : window.innerWidth < 1024
      ? "tablet"
      : "pc"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setDeviceType("mobile");
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("pc");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ⭐ 이미지 선택 로직
  const getImageByDevice = () => {
    if (deviceType === "mobile") return mainpageMobile;
    if (deviceType === "tablet") return mainpageTablet;
    return mainpage; // PC
  };

  return (
    <div className="relative min-h-[110vh] bg-black pt-10 pb-20">
      {/* 메인 이미지 */}
      <div className="w-full h-[450px] md:h-[700px] overflow-hidden flex justify-center items-center bg-black">
        <img
          src={getImageByDevice()}
          className="w-full h-full object-cover"
          alt="Main Page"
        />
      </div>

      {/* 카드 섹션 */}
      <div className="container mx-auto py-10 pb-28 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="
                text-center bg-darkbg rounded-xl 
                w-full h-[240px] sm:h-[260px] md:h-[300px]
                flex flex-col items-center justify-center
                transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg
              "
            >
              <div className="text-5xl sm:text-6xl md:text-7xl text-gray-100 py-3">
                {card.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-orange">
                {card.number}
              </div>
              <div className="text-lg sm:text-xl text-gray-300 pb-3">
                {card.label}
              </div>
              <div className="text-gray-100 px-3 sm:px-6 md:px-9 whitespace-pre-line">
                {card.explain}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
