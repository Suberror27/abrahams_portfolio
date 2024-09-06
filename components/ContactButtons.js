
export function ContactButtons(){

    return <>
        {/* <div className="hidden md:block fixed top-40 left-2"> */}
            <div className="flex flex-row gap-20 my-4">
                <div>
                    <a href="https://github.com/Suberror27" target="blank">
                        <img className="h-10 w-10 md:h-14 md:w-14 p-[1px] md:p-0.5 bg-white rounded-lg shadow-xl hover:bg-blue-200 hover:scale-110 duration-300" src="/github_icon.svg" alt="Icon Image" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/abraham-camargo-b12134261/" target="blank">
                        <img className="h-10 w-10 md:h-14 md:w-14 p-[1px] md:p-0.5 bg-white rounded-lg shadow-xl hover:bg-blue-200 hover:scale-110 duration-300" src="/linkedin_icon.svg" alt="Icon Image" />
                    </a>
                </div>
                <div>
                    <a href="#" target="blank">
                        <img className="h-10 w-10 md:h-14 md:w-14 p-[1px] md:p-0.5 bg-white rounded-lg shadow-xl hover:bg-blue-200 hover:scale-110 duration-300" src="/resume_icon.svg" alt="Icon Image" />
                    </a>
                </div>
                {/* <div>
                    <a className="hover:cursor-pointer">
                        <img className="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300" src="/email_icon.svg" alt="Icon Image" />
                    </a>
                </div> */}
            </div>
        {/* </div> */}
    </>
}