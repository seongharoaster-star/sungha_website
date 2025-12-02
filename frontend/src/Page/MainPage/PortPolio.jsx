import React from "react";
import { Link } from "react-router-dom";
import jickhwa from "../../assets/jickhwa.jpg";
import coowoo from "../../assets/portpolio/coowoocoowoo.jpg";
import goldpig from "../../assets/portpolio/goldpig.jpg";
import yangin from "../../assets/yangin.png";
import seeshall from "../../assets/tidalFlatClams.png";
import chowon from "../../assets/chowon.png";
import shinsa from "../../assets/shinsayakbang.png";
import kim from "../../assets/majangdongkims.png";

const Portpolio = () => {
  const executives = [
    {
      name: "직화장인",
      imageUrl: jickhwa,
      position: "신당본점, 마곡점 외",
    },
    {
      name: "쿠우쿠우",
      position: "구로점, 부평점 외",
      imageUrl: coowoo,
    },
    {
      name: "금돼지식당",
      position: "대만",
      imageUrl: goldpig,
    },
    {
      name: "양인환대",
      position: "신용산, 극진, 북창 외",
      imageUrl: yangin,
    },
    {
      name: "갯벌의조개",
      position: "여의도본점, 잠실본점 외",
      imageUrl: seeshall,
    },
    {
      name: "초원",
      position: "도산대로점",
      imageUrl: chowon,
    },
    {
      name: "신사약방",
      position: "선릉본점",
      imageUrl: shinsa,
    },
    {
      name: "마장동김씨",
      position: "봉명점, 마곡나루점 외",
      imageUrl: kim,
    },
  ];

  return (
    <div className="relative min-h-[110vh] bg-black pb-10">
      <div className="container mx-auto px-4 pt-28 lg:py-0 max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl pb-20 lg:text-5xl font-bold text-gray-100">
            PORTPOLIO
          </h2>

          <div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-8">
              {executives.map((executives, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="aspect-square bg-gray-200">
                    <img
                      src={executives.imageUrl}
                      alt={executives.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 pb-1">
                      {executives.name}
                    </h3>
                    <p className="text-sm md:text-base text-indigo-600 font-semibold">
                      {executives.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portpolio;
