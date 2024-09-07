import React from 'react';

export default function Container({ information }){
  return (
    <section>
      <div className="mx-auto px-4">
        <div className="space-y-2">
          {information.map((exp, index) => (
            <div key={index} className="bg-slate-300 p-6 rounded-lg shadow-xl hover:scale-105 duration-500">
              <h3 className="text-sm md:text-xl font-semibold text-gray-700">{exp.title}</h3>
              <p className="text-gray-500 text-xs md:text-lg">{exp.company} | {exp.date}</p>
              <p className="text-gray-600 text-xs md:text-lg">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
