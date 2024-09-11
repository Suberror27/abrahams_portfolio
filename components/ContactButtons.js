
export function ContactButtons(){

    return <>
        <div className="fixed bottom-16 md:top-40 left-2 md:left-2">
            <div className="flex flex-row md:flex-col gap-2 md:gap-10 my-4">
                <div>
                    <a href="https://github.com/Suberror27" target="blank">
                        <img className="h-8 w-9 md:h-12 md:w-12 p-[1px] md:p-0.5 bg-white rounded-lg shadow-xl hover:bg-blue-200 hover:scale-110 duration-300" src="/github_icon.svg" alt="Icon Image" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/abraham-camargo-b12134261/" target="blank">
                        <img className="h-8 w-9 md:h-12 md:w-12 p-[1px] md:p-0.5 bg-white rounded-lg shadow-xl hover:bg-blue-200 hover:scale-110 duration-300" src="/linkedin_icon.svg" alt="Icon Image" />
                    </a>
                </div>
                <div>
                    <a href="#" target="blank">
                        <img className="h-8 w-9 md:h-12 md:w-12 p-[1px] md:p-0.5 bg-white rounded-lg shadow-xl hover:bg-blue-200 hover:scale-110 duration-300" src="/resume_icon.svg" alt="Icon Image" />
                    </a>
                </div>
            </div>
        </div>
    </>
}