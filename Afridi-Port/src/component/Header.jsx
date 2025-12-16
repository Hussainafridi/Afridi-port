import React from "react";
import  { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

       
  const [Open,setOpen] = useState(false);

  

  return (
    <nav className=" bg-[#f6f8f9] px-14 py-4 flex justify-between items-center  transition-all duration-300 fixed top-0 w-full  from-white/80 to-transparent backdrop-blur-md z-50 ">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#705fbe]">AH</div>

      {/* desktop view Links */}
      <div className="space-x-8 text-xl font-semibold text-[#374151] hidden md:flex   ">
        <a href="#home" className="hover:text-[#705fbe] transition  hover:decoration-2 hover:underline hover:decoration-[#705fbe] hover:underline-offset-8">Home</a>
        <a href="#about" className="hover:text-[#705fbe] transition hover:decoration-2 hover:underline hover:decoration-[#705fbe] hover:underline-offset-8">About</a>
        <a href="#Skills" className="hover:text-[#705fbe] transition hover:decoration-2  hover:underline hover:decoration-[#705fbe] hover:underline-offset-8">Skills</a>
        <a href="#Feature" className="hover:text-[#705fbe] transition hover:decoration-2  hover:underline hover:decoration-[#705fbe] hover:underline-offset-8">Projects</a>
        <a href="#experience" className="hover:text-[#705fbe] transition hover:decoration-2 hover:underline hover:decoration-[#705fbe] hover:underline-offset-8">Experience</a>
        <a href="#Contact" className="hover:text-[#705fbe] transition  hover:decoration-2 hover:underline hover:decoration-[#705fbe] hover:underline-offset-8">Contact</a>
      </div>

      {/* Dark/Light Mode Toggle */}
       <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!Open)}
        >
          {open ? <GiHamburgerMenu size={30}  /> :<IoMdClose  sixe={30}/>}
        </button>
         <div
        className={`md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-lg shadow-xl transition-all ${
          Open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 py-6 px-8 text-lg font-semibold">
          <li><a href="#home" className="hover:text-indigo-600" onClick={()=>setOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600" onClick={()=>setOpen(false)}>About</a></li>
          <li><a href="#Skills" className="hover:text-indigo-600" onClick={()=>setOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600" onClick={()=>setOpen(false)}>Projects</a></li>
          <li><a href="#Contact" className="hover:text-indigo-600" onClick={()=>setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
  


};


export default Header;

