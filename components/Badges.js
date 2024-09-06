import React from 'react';

export default function Badges({ badgeInfo }){
  return (
    <section >
      <div className="mx-auto px-4">
        <div className="flex flex-wrap gap-4">
          {badgeInfo.map((badge, index) => (
            <div key={index} className="bg-slate-300 p-4 rounded-lg shadow-md h-48 w-24 md:w-28">
              <div className="w-full h-24">
                <img src={badge.image} alt={badge.title} className="w-full h-full object-fill mb-2" />
              </div>
              <p className="text-md text-center font-semibold text-gray-700">{badge.title}</p>
              <p className="text-gray-500">{badge.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
