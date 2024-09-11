import React from 'react';

export default function Certificates({ certInfo }){
  return (
    <section>
      <div className="mx-auto px-4">
        <div className="space-y-2">
        {certInfo.map((cert, index) => (
            <div key={index} className="bg-slate-300 p-6 rounded-lg shadow-xl flex hover:scale-105 duration-500">

              <div>
                <h3 className="text-sm md:text-xl font-semibold text-gray-700">{cert.title}</h3>
                <p className="text-gray-500 text-xs md:text-lg">{cert.issuer} | {cert.date}</p>
                <p className="mt-2 text-gray-600">{cert.description}</p>
              </div>

              <div className="w-32 h-24">
                <a href={cert.image === "/cert_placeholder.svg" ? "#" : cert.image} target="_blank" className={`block w-full h-full ${cert.image === "/cert_placeholder.svg" ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''}`}>
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-fill mb-2" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
