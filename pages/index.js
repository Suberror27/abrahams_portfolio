
export default function Home() {
  return (
   <>
    {/* <h1 className="text-2xl text-center">Index</h1> */}
      <div className="grid grid-rows-1 w-full pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-5xl md:text-7xl pl-4 md:text-center drop-shadow-lg text-blue-950">Abraham Camargo <br/><span className="hidden md:block text-white text-3xl pt-4">Systems Administrator / Full Stack Developer</span></div>
          <div className="text-md pl-4 text-white md:hidden">Systems Administrator / Full Stack Developer</div>
          <div className="pl-4 h-[55vh] hidden md:block">
              <img className="rounded-2xl h-full w-auto object-fill" src="/profile_picture.png"/>
          </div>
        </div>
        <div className="grid grid-rows-1 md:hidden">
          <div className="grid grid-cols-1">
            <div className="flex pl-4 h-[55vh]">
              <img className="rounded-3xl h-full w-auto object-fill" src="/profile_picture.png"/>
            </div>
          </div>
        </div>
      </div>
   </>
  );
}
