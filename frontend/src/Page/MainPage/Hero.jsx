import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoConstructSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import uptta from "../../assets/uptta.png";
import downtta from "../../assets/downtta.png";

const Hero = () => {
  const cards = [
    {
      icon: <IoConstructSharp />,
      number: "1,000+",
      label: "설치 완료",
      explain: "수많은 고객이 택한\n신뢰의 기술력",
    },
    {
      icon: <BsArrowRepeat />,
      number: "92%",
      label: "재주문율",
      explain: "고객 경험이 증명한\n높은 만족도",
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
      explain: "문제 발생 시 언제든\n빠른 대응 지원",
    },
  ];

  return (
    <div className="relative bg-black pt-20">
      <div className="w-full flex justify-center px-4 my-8 sm:my-10">
        <div className="text-center w-full max-w-[800px]">
          {/* 상단 따옴표 */}
          <motion.img
            src={uptta}
            className="w-6 sm:w-8 mx-auto mb-4 sm:mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          {/* 첫 줄 */}
          <motion.div
            className="text-xl sm:text-2xl md:text-4xl text-gray-300 font-medium leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            외식 공간 스토리텔링을 이끄는
          </motion.div>

          {/* 모바일용 (줄바꿈 버전) */}
          <motion.div
            className="block sm:hidden text-4xl py-2 text-white font-SchoolSafetyWave font-bold leading-tight"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            커스터마이징 디자인 <br /> 로스타·불판
          </motion.div>

          {/* 태블릿/PC용 (한 줄 버전) */}
          <motion.div
            className="hidden sm:block text-4xl md:text-[45px] py-2 text-white font-SchoolSafetyWave font-bold leading-tight"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            커스터마이징 디자인 로스타·불판
          </motion.div>

          {/* 세 번째 줄 */}
          <motion.div
            className="text-xl sm:text-2xl md:text-4xl text-gray-300 font-medium leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            업계 1위 기업
          </motion.div>

          {/* 하단 따옴표 */}
          <motion.img
            src={uptta}
            className="w-6 sm:w-8 mx-auto mt-4 sm:mt-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
          />
        </div>
      </div>
      <div className="container mx-auto py-10 pb-28 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
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
