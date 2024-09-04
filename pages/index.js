import Link from "next/link";
import { useRouter } from "next/router";
import { SideButtons } from "../components/SideButtons";

export default function Home() {
  return (
   <>
      <div className="grid grid-rows-1 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="text-center">
            <div className="text-5xl md:text-7xl md:text-center drop-shadow-lg text-black ">Abraham Camargo</div>
            <div className="text-white text-md md:text-3xl pt-1">Systems Administrator / Full Stack Developer</div>
            <div className="text-md md:text-2xl p-4 md:bg-blue-900 rounded-3xl md:m-4 md:h-[27rem] md:text-white">
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

          <div className="">
            <div className="flex h-[25rem] md:h-[35rem] justify-center">
                <img className="rounded-2xl h-full w-auto object-fill" src="/profile_picture.png"/>
            </div>
            
          </div>

        </div>
      </div>
      <div className="grid grid-rows-1 pt-4 pb-4">
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <SideButtons />
          </div>
          <div className="text-center md:hidden">Want to know more about me? <Link href="/about" className="underline text-blue-500">Click Here</Link></div>
        </div>
      </div>
   </>
  );
}


{/* <div class="hidden md:block fixed top-40 left-0 ">
  <div class="flex flex-row md:flex-col gap-6 my-4">
    <div>
      <a href="https://github.com/Sajomkhan" target="blank">
        <img class="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300" src="/assets/github-539df0ef.svg" alt="Icon Image" />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/saiful-ajom-khan" target="blank">
        <img class="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300" src="/assets/linkedin-971d829a.svg" alt="Icon Image" />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/SabuzKh10364527" target="blank">
        <img class="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300" src="/assets/twitter-a91de54d.svg" alt="Icon Image" />
      </a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1in4bElBWRcDCfHinaO7FnOtqDH5t38oE/view?usp=sharing" target="blank">
        <img class="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300" src="/assets/cv-3d528e84.svg" alt="Icon Image" />
      </a>
    </div>
    <div>
      <a class="hover:cursor-pointer">
        <img class="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300" src="/assets/mail-cebebce6.svg" alt="Icon Image" />
      </a>
    </div>
  </div>
</div> */}