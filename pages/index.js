import Link from "next/link";
import { useRouter } from "next/router";
import { ContactButtons } from "../components/ContactButtons";

export default function Home() {
  return (
   <>
      <div className="grid grid-rows-1 pt-4 pb-4 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="text-center p-4">
            <p className="text-3xl md:text-6xl md:text-center drop-shadow-lg font-semibold text-gray-700 pb-2">Abraham Camargo</p>
            <p className="text-white text-md md:text-3xl pt-1 font-semibold drop-shadow-lg">Systems Administrator / Web Developer</p>
            <div className="text-md md:text-2xl p-4 rounded-3xl md:m-4 md:h-[27rem] text-white font-semibold text-start shadow-lg bg-gray-600">
              <p className="mb-2">
                • Enthusiastic web developer specializing in React and Next.js, with a passion for designing and building dynamic web applications that excel in user experience and performance.
              </p>
              <p className="mb-2">
                • Skilled in both front-end and backend development, with a keen attention to detail and a commitment to delivering high-quality, innovative solutions.
              </p>
              <p>
                • Highly self-motivated and ready to showcase my expertise in creating seamless and effective digital experiences.
              </p>
            </div>
          </div>

          <div>
            <div className="flex h-[25rem] md:h-[37rem] justify-center p-4">
                <img className="rounded-2xl h-full w-auto object-fill shadow-xl border border-black" src="/profile_picture.png"/>
            </div>
          </div>

        </div>
      </div>
   </>
  );
}
