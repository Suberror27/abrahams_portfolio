import Link from "next/link";
import { useRouter } from "next/router";
import { ContactButtons } from "../components/ContactButtons";

export default function Home() {
  return (
   <>
      <div className="grid grid-rows-1 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="text-center">
            <div className="text-5xl md:text-7xl md:text-center drop-shadow-lg font-semibold text-gray-700 pb-2">Abraham Camargo</div>
            <div className="text-white text-md md:text-3xl pt-1 font-semibold drop-shadow-lg">Systems Administrator / Full Stack Developer</div>
            <div className="text-md md:text-2xl p-4 rounded-3xl md:m-4 md:h-[27rem] md:text-white">
              {/* I specialize in Full Stack Web Development, where my passion lies in crafting responsive and user-friendly web applications. 
              I prioritize attention to detail and scalability to ensure that every project I undertake exceeds client expectations. */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel turpis a felis cursus sagittis. 
              Integer vestibulum eros vel magna consequat, a blandit ipsum faucibus. Sed vitae magna et dolor condimentum laoreet. 
              Donec vestibulum lacinia sapien, nec convallis velit facilisis et. Proin maximus eros id augue euismod, ac convallis metus tincidunt. 
              Cras malesuada dolor a efficitur aliquet. Fusce lacinia eros at justo ultrices, vel posuere turpis fringilla.
              Nullam varius, dolor id vulputate vestibulum, sem urna hendrerit lacus, id pretium purus orci ac neque. 
              Integer gravida, quam nec tempor lacinia, orci ligula consequat lectus, ac suscipit nunc ex in libero. 
            </div>
          </div>

          <div>
            <div className="flex h-[25rem] md:h-[35rem] justify-center">
                <img className="rounded-2xl h-full w-auto object-fill shadow-xl" src="/profile_picture.png"/>
            </div>
          </div>

        </div>
      </div>
      <div className="grid grid-rows-1 pt-4 pb-5">
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <ContactButtons />
          </div>
          {/* <div className="text-center md:hidden">
            <Link href="/Education" className="underline text-blue-500">My Education</Link>
          </div> */}
        </div>
      </div>
   </>
  );
}
