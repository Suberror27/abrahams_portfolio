import React from 'react';

export default function Certificates({ certInfo }){
  return (
    // <section>
    //   <div className="mx-auto px-4">
    //     <ul className="space-y-2">
    //       {certInfo.map((cert, index) => (
    //         <li key={index} className="bg-slate-300 border p-4 rounded-lg shadow-md">
    //           <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
    //           <p className="text-gray-500">{cert.issuer} | {cert.date}</p>
    //           <div className="w-full h-24">
    //             <a href={cert.image} target="blank">
    //               <img src={cert.image} alt={cert.title} className="w-full h-full object-fill mb-2" />
    //             </a>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </section>
    <section>
    <div className="mx-auto px-4">
      <div className="space-y-2">
      {certInfo.map((cert, index) => (
          <div key={index} className="bg-slate-300 p-6 rounded-lg shadow-lg flex">

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-gray-700">{cert.title}</h3>
              <p className="text-gray-500 text-xs md:text-lg">{cert.issuer} | {cert.date}</p>
              <p className="mt-2 text-gray-600">{cert.description}</p>
            </div>

            <div className="w-32 h-24">
              <a href={cert.image} target="blank">
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
