
export default function Home() {
  return (
   <>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="bg-slate-900">
            <div className="flex h-[55vh] justify-center">
                <img className="rounded-2xl h-full w-auto object-fill" src="/profile_picture.png"/>
            </div>
          </div>

          <div className="bg-slate-400 text-center">
              <div className="text-5xl md:text-7xl md:text-center drop-shadow-lg text-black ">Abraham Camargo</div>
              <div className="text-white text-md md:text-xl pt-1">Systems Administrator / Full Stack Developer</div>
          </div>

        </div>
      </div>
   </>
  );
}



{/* <div className="grid grid-rows-1 w-full pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-5xl md:text-7xl pl-4 md:text-center drop-shadow-lg text-blue-950">Abraham Camargo <br/><span className="hidden md:block text-white text-3xl pt-4">Systems Administrator / Full Stack Developer</span></div>
          <div className="text-md pl-4 text-white md:hidden">Systems Administrator <br/> Web Applications Full Stack Developer</div>
          <div className="pl-4 h-[55vh] hidden md:block">
              <img className="rounded-2xl h-full w-auto object-fill" src="/profile_picture.png"/>
          </div>
        </div>
        <div className="grid grid-rows-1 md:hidden mt-2">
          <div className="grid grid-cols-2">
            <div className="flex pl-4 h-[55vh]">
              <img className="rounded-3xl h-full w-auto object-fill" src="/profile_picture.png"/>
            </div>
            <div className="text-center font-bold">A little bit about myself: <br/>
              <div className="text-start font-normal">My name is Abraham Camargo, I am 25 years old. I work for Walmart DC8600 Print Solutions. I started my Systems career at DC6094. This place is were I found
                my love for developing web applications. Its been 1 year since I developed my first website, and since haven't stopped learning newer, easier, and profesional ways of building web applications.
              </div>
            </div>
          </div>
        </div>
      </div> */}