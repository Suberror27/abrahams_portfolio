import React from 'react';

export default function Badges({ badgeInfo }){
  return (
    <section >
      <div className="mx-auto px-4">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {badgeInfo.map((badge, index) => (
            <div key={index} className="bg-slate-300 p-1 rounded-lg shadow-xl h-48 w-[6.5rem] md:w-36 md:h-52 hover:scale-105 duration-500">
              <div className="w-full h-24">
                <a href={badge.image} target="_blank">
                  <img src={badge.image} alt={badge.title} className="w-full h-full object-fill mb-2" />
                </a>
              </div>
              <p className="text-xs md:text-base text-center font-semibold text-gray-700">{badge.title}</p>
              <p className="text-gray-500 text-center text-sm md:text-base">{badge.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

