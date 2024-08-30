import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export function NavigationBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {value: "/", title: "Home"},
        {value: "/about", title: "About"},
        {value: "/contact", title: "Contact"},
        {value: "/page3", title: "Page 3"},
        {value: "/page4", title: "Page 4"}
    ]

    const getClassName = (value) => router.pathname === value 
    ? "border-[2px] border-black rounded-lg px-4 py-2 text-md font-semibold bg-blue-900 hover:cursor-pointer" 
    : "border-[2px] border-black rounded-lg px-4 py-2 text-md font-semibold hover:cursor-pointer";

    const getClassNameMobile = (value) => router.pathname === value 
    ? "float-left border-[2px] border-black rounded-lg px-8 py-1 text-md font-semibold bg-blue-900 hover:cursor-pointer" 
    : "float-left border-[2px] border-black rounded-lg px-8 py-1 text-md font-semibold hover:cursor-pointer";

  return (
    <>
    <nav className="bg-[#15181b] p-3 lg:p-4 xl:p-4 2xl:p-4 shadow-xl text-[#ddd]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link href="/" className="text-white hover:text-gray-400">
              My Portfolio
            </Link>
          </div>
          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <div className={`lg:flex lg:space-x-10 hidden`}>
            <ul className={`flex flex-col lg:flex-row lg:space-x-10 lg:w-auto`}>
              {links.map((item) => (
                <li key={item.title} className="py-2 lg:py-0">
                  <Link href={item.value} className={getClassName(item.value)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

        {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className={`lg:hidden bg-[#15181b] p-4 text-center w-full transition-transform duration-400 ease-in-out ${isOpen ? 'slide-in' : 'slide-out'}`}>
          <ul className="flex flex-col space-y-2">
            {links.map((item) => (
              <li key={item.title}>
                <Link href={item.value} className={getClassNameMobile(item.value)} onClick={() => setIsOpen(!isOpen)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </>
  )
}
