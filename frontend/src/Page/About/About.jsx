import React from "react";
import companyImage from "../../assets/officeinfo.jpg";
import value1 from "../../assets/value1.png";
import value2 from "../../assets/value2.png";
import value3 from "../../assets/value3.png";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl">
      {/* 메인 상단 이미지 */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24">
        <img src={companyImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>

        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white">
          <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-3">
            (주)성하R&F
          </h3>
          <p className="text-sm md:text-xl font-light">
            업주의 니즈를 반영한 최적의 구이 솔루션
          </p>
        </div>
      </div>

      {/* 소개 문단 */}
      <div className="mb-24 max-w-4xl mx-auto text-center text-gray-600">
        <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-5">
          <p className="font-semibold">국내 No.1 로스타 맞춤제작 전문기업, 성하R&F</p>
          <br />
          <p>성하R&F는 불판부터 로스타, 테이블까지</p>
          <p>공간과 콘셉트에 맞춘 맞춤 제작 솔루션을 제공합니다.</p>
          <p>국내외 미쉐린 가이드 선정 레스토랑을 비롯해</p>
          <p>수많은 프리미엄 브랜드들이 성하R&F를 선택한 이유</p>
          <p>
            그건 바로 완벽한 품질, 정밀한 기술, 그리고 차별화된 디자인입니다.
          </p>
          <p>
            최신 설비 기술로 매장의 품격을 높이는 통합형 로스타 시스템을
            제안합니다.
          </p>
             <br />
          <p className="pt-4">성하R&F,</p>
          <p>로스타의 기준이 되다.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="pt-10">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold pb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-lg md:text-xl pb-16 text-gray-600">
          디자인·기술력·가격, 세 가지를 모두 잡다.
        </p>
      </div>

      {/* 6개 카드 */}
      <div
        className="
  grid grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-2   /* 아이패드(태블릿): 2컬럼 */
  lg:grid-cols-3   /* PC부터 3컬럼 */
  gap-6 md:gap-10 mb-24
"
      >
        {[
          {
            title: "맞춤형 디자인 설계",
            desc: "매장 컨셉에 맞춘 로스타·불판 설계로\n차별화된 아이덴티티 제공",
          },
          {
            title: "기술이 만드는 최상의 풍미",
            desc: "최고급 소재와 정밀한 기술력으로\n최고의 화력 및 내구성 보장",
          },
          {
            title: "글로벌 경쟁력",
            desc: "북미·아시아 전역으로 수출하며\n세계가 선택한 로스타 브랜드로 성장",
          },
          {
            title: "직접 제조 · 직접 공급",
            desc: "불필요한 유통 단계를 줄여\n합리적인 가격 제공",
          },
          {
            title: "효율적인 유지관리 설계",
            desc: "오랜 노하우로 세척·관리 과정 개선,\n인건비 절감에 기여",
          },
          {
            title: "빠른 대응 & A/S",
            desc: "제작부터 설치, A/S까지\n원스톱 고객 지원",
          },
        ].map((value, i) => (
          <div
            key={i}
            className="bg-white p-6 md:p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-indigo-600">
              {value.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg whitespace-pre-line">
              {value.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Our Values */}
      <div className="mb-24">
        <div className="text-center mb-20">
          <h2 className="font-extrabold text-2xl pt-20 md:text-3xl pb-4">
            Our Values
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            성하R&F가 추구하는 핵심 가치 3가지입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* 1번 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <img
              src={value1}
              className="rounded-2xl shadow-2xl object-cover w-full"
            />
            <div>
              <p className="font-extrabold text-xl md:text-3xl pb-4">
                Identity Craft (정체성 설계)
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                우리는 고객의 매장이 가진 고유한 컨셉과 스토리를 깊이 이해하고,
                이를 로스타와 불판 디자인에 가장 효과적으로 구현하는 것에
                집중합니다.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-2">
                제품 하나하나에 매장의 정체성을 담아내는 장인 정신을 발휘합니다.
              </p>
            </div>
          </div>

          {/* 2번 카드 – PC부터 반전 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row-reverse gap-6 md:gap-8 items-center">
            <img
              src={value2}
              className="rounded-2xl shadow-2xl object-cover w-full md:w-full lg:w-1/2"
            />
            <div className="md:w-full lg:w-1/2">
              <p className="font-bold text-xl md:text-2xl pb-4">
                Partnership Beyond Product (협력의 가치)
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                단순 공급자가 아닌 전략적 파트너로서 고객의 성공을 함께
                만듭니다.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-2">
                기획 단계부터 완성까지, 고객의 니즈를 경청하고 신뢰를 바탕으로
                최적의 솔루션을 제공하며 동반 성장을 추구합니다.
              </p>
            </div>
          </div>

          {/* 3번 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <img
              src={value3}
              className="rounded-2xl shadow-2xl object-cover w-full"
            />
            <div>
              <p className="font-bold text-xl md:text-2xl pb-4">
                Excellence in Detail (디테일의 탁월함)
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                맛과 경험을 좌우하는 로스타와 불판의 기능적 완벽함과 미적
                완성도를 위해 끊임없이 연구하고 혁신합니다.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-2">
                최고의 소재와 정밀한 제작 기술로, 오래도록 변치 않는 가치와
                안전성을 약속합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
