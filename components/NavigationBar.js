import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export function NavigationBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    ? "block py-2 bg-gray-700" 
    : "block py-2";

return (
  <nav className="bg-gray-800 text-white p-4 relative">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-2xl font-bold">Logo</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        {links.map((item) => (
            <Link href={item.value} className={getClassName(item.value)}>
              {item.title}
            </Link>
        ))}
      </div>
      {/* <div className="hidden md:flex space-x-4">
        <Link href="/" legacyBehavior><a className="hover:bg-gray-700 p-2 rounded">Home</a></Link>
        <Link href="#" legacyBehavior><a className="hover:bg-gray-700 p-2 rounded">Menu</a></Link>
        <Link href="#" legacyBehavior><a className="hover:bg-gray-700 p-2 rounded">About</a></Link>
        <Link href="#" legacyBehavior><a className="hover:bg-gray-700 p-2 rounded">Awards</a></Link>
      </div> */}

      {/* Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button ref={buttonRef} onClick={toggleMenu} className="text-2xl focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div ref={menuRef} className={`md:hidden fixed top-[4rem] right-0 w-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <ul className="flex flex-col flex-grow py-4">
        {links.map((item) => (
          <li className="w-full text-center">
            <Link href={item.value} className={getClassNameMobile(item.value)} onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
          {/* <li className="w-full text-center">
            <Link href="/" legacyBehavior><a className="block py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</a></Link>
          </li>
          <li className="w-full text-center">
            <Link href="#" legacyBehavior><a className="block py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Menu</a></Link>
          </li>
          <li className="w-full text-center">
            <Link href="#" legacyBehavior><a className="block py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</a></Link>
          </li>
          <li className="w-full text-center">
            <Link href="#" legacyBehavior><a className="block py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Awards</a></Link>
          </li>
          <li className="w-full text-center">
            <a href="tel:410-602-5008" className="block py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>410-602-5008</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
);
}
