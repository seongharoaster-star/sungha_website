import React from "react";
import executives from "../../data/executives";
import ExecutiveCard from "../../Components/ExecutiveCard";
import grill2 from "../../assets/grill3.jpg";

const Portfolio = () => {
  const images = import.meta.glob("../../assets/portpolio/*.{jpg,png,jpeg,webp}", {
    eager: true,
  });

  const getImage = (filename) => {
  const match = Object.entries(images).find(([key]) => {
    const keyFilename = key.split("/").pop();

    return keyFilename === filename;
  });
  return match ? match[1].default : grill2;
};

  return (
    <div className="container max-w-7xl mx-auto px-4 py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          시공매장
        </h2>
        <p className="text-xl text-gray-600">Portfolio</p>
      </div>

      <div className="mb-24">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8">
          {executives.map((item, index) => (
            <ExecutiveCard
              key={index}
              name={item.name}
              position={item.position}
              image={getImage(item.imageUrl)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
