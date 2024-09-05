import React from 'react';

export default function Container({ information }){
  return (
    <section>
      <div className="mx-auto px-4">
        <div className="space-y-2">
          {information.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">{exp.title}</h3>
              <p className="text-gray-500">{exp.company} | {exp.date}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
