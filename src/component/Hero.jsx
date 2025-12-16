import React from "react";
import { LuMail } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-white  transition-all duration-500"
    >
      {/* Your Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#705fbe] mb-4 ">
        Afridi<span className="text-[#705fbe] "> Hussain</span>
      </h1>

      <div className="text- xl md:text-xl text-black  mb-8">
        {/* Short Intro */}
        <p className="text-xl font-semibold ">
          Front-End-JavaScript Developer
        </p>
        <p className=" p-2 max-w-2xl font-regular">
          React-Js  | JavaScript | HTML | CSS | Tailwind CSS | Python (Language)
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center justify-between gap-5">
        <a
          href="#projects"
          className=" bg-[#2563eb] hover:bg-[#2563eb] transition-transform duration-300 hover:scale-110 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          View My Work
        </a>
        <a
          href="#Form"
          className=" hover:bg-[#2563eb] transition-transform duration-300 hover:scale-110 hover:text-white text-[#2563eb] font-semibold px-6 py-3 rounded-lg shadow-md transition border-2 border-blue-600 "
        >
          Contact Me
        </a>
      </div>
      <div className="mt-7 flex items-center justify-between gap-8 text-2xl text-[#666e7a]">
        <a href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563eb] hover:underline  transition-transform duration-300 hover:scale-130">
          <FiGithub />
        </a>
        <a href="mailto:hussainafridi948@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563eb] hover:underline  transition-transform duration-300 hover:scale-130">
          <LuMail />
        </a>
        <a href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563eb] hover:underline  transition-transform duration-300 hover:scale-130">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/nomadic_afridi?igsh=MWoxZjIzbmxvMmVwMg==" target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563eb] hover:underline  transition-transform duration-300 hover:scale-130">
          <BsInstagram />
        </a>
      </div>

      <div className="absolute bottom-10 text-4xl text-[#666e7a]  animate-[bounce_1s_ease-in-out_infinite] ">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Hero;
