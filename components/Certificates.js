import React from 'react';

export default function Certificates({ certInfo }){
  return (
    <section>
      <div className="mx-auto px-4">
        <ul className="space-y-2">
          {certInfo.map((cert, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
              <p className="text-gray-500">{cert.issuer} | {cert.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
