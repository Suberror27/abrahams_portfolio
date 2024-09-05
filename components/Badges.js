import React from 'react';

export default function Badges({ badgeInfo }){
  return (
    <section >
      <div className="mx-auto px-4">
        <div className="flex flex-wrap gap-4 ">
          {badgeInfo.map((badge, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-24 h-48 md:w-28">
              <img src={badge.image} alt={badge.title} className="w-full h-34 mb-2" />
              <p className="text-md font-semibold text-gray-700">{badge.title}</p>
              <p className="text-gray-500">{badge.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
