import React from "react";

const ExecutiveCard = ({ name, position, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="aspect-square bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="px-2 py-4 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-indigo-600 font-semibold">{position}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;