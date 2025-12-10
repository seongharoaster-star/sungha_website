import React from "react";
import pcBanner from "../../assets/mainBannerImg.png";
import tabletBanner from "../../assets/tabletBanner.png";
import mobileBanner from "../../assets/mobileBanner.png";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

const BannerText = () => {
  return (
    <div
      className="
    absolute 
    left-1/2 
    -translate-x-1/2 
    -translate-y-1/2
    text-white text-center z-10
    
    top-1/3 md:top-1/4
    w-[90%] md:w-[80%] lg:w-auto
  "
    >
      {/* 상단 영문 */}
      <motion.p
        custom={0.3}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="
    text-[14px] md:text-[17px] lg:text-[17px]
    pb-4 text-gray-400
  "
      >
        <span className="md:hidden block font-Bonmyeongjo pb-3">
          Premium roaster company <br /> SUNGHA R&F
        </span>
        <span className="md:hidden block w-7 h-[1px] bg-gray-700 mx-auto mt-3 rounded-full"></span>

        <span className="hidden md:inline  font-Bonmyeongjo">
          Premium roaster company SUNGHA R&F
        </span>
      </motion.p>

      {/* 메인 문구 */}
      <motion.p
        custom={0.6}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="
          text-[32px] md:text-[50px] lg:text-[55px]
          leading-[1.4] md:leading-[1.3] lg:leading-[1.3]
          py-2 font-Bonmyeongjo
        "
      >
        <span
          className="block
          font-Bonmyeongjo"
        >
          공간을 완성하는
        </span>
        <span
          className="block 
          font-Bonmyeongjo"
        >
          가장 중요한 디테일
        </span>
      </motion.p>

      {/* 하단 설명 */}
      <motion.p
        custom={0.9}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="
          text-[14px] md:text-[18px] lg:text-[20px]
          pt-6 text-gray-400
        "
      >
        <span className="block">매장 스토리에 녹아드는 맞춤형 디자인과</span>
        <span className="block">기술력으로 식당의 가치를 높입니다.</span>
      </motion.p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative bg-black pt-10">
      <div
        className="
          hidden lg:flex
          w-full min-h-[100vh] 
          items-center justify-center 
          bg-center bg-no-repeat bg-cover relative
        "
        style={{ backgroundImage: `url(${pcBanner})` }}
      >
        <BannerText />
      </div>

      <div
        className="
          hidden md:flex lg:hidden
          w-full min-h-[75vh]
          items-center justify-center
          bg-center bg-no-repeat bg-cover relative
        "
        style={{ backgroundImage: `url(${tabletBanner})` }}
      >
        <BannerText />
      </div>

      <div
        className="
          flex md:hidden
          w-full min-h-[95vh]
          items-center justify-center
          bg-center bg-no-repeat bg-cover relative
        "
        style={{ backgroundImage: `url(${mobileBanner})` }}
      >
        <BannerText />
      </div>
    </div>
  );
};

export default Banner;
