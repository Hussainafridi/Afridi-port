import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LuArrowDownToLine } from "react-icons/lu";
import { useState } from 'react';

export const Contact = () => {
const [result, setResult] = useState("");

 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0a645ec3-ee10-42de-a6fd-27ae4cec1be7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    event.target.reset();
  };


  return (
    <div className='w-full py-16 px-6 '>
        <h1 className="text-center text-5xl text-[#705fbe] font-bold mb-14">
    Get In Touch
  </h1>
   <p className='text-center text-xl'>Let's discuss how we can work together to bring your ideas to life</p>

 <div className="flex  justify-center items-center gap-10 mt-10 md:flex-row flex-col">
    {/* LEFT SECTION */}
    <form  id="Form" onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md w-100 h-150  space-y-8   sm:w-150">

      <h2 className="text-2xl font-semibold text-gray-700 text-center">Contact Form</h2>

      <div>
        <label className="block text-gray-600 text-sm mb-1">Name</label>
        <input
          type="text"
          name="name" required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-1">Email</label>
        <input
          type="email"
          name="email" required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-1">Message</label>
        <textarea
          rows="4"
          name="message" required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Send
      </button>
       {result && (
    <span className="text-center block text-green-600">{result}</span>
  )}

    </form>


    {/* RIGHT CARD GRID */}
    <div className="flex flex-col gap-8 sm:gap-4 " id="Contact">

      <div className="bg-white shadow-lg p-6 rounded-xl sm:w-150 w-100 ">
        <h4 className="text-xl font-semibold px-2">Let's connect</h4>
        <div className='flex  gap-4 py-3 px-2'>
          <div className='mt-1 h-10 w-10 bg-blue-500 flex justify-center items-center rounded-lg text-white'>< LuMail size={20} /></div>
       <div>
         <p className='text-md font-medium '>Email</p>
        <p className='text-md  '>Hussainafridi948@gmail.com</p>
       </div>
      </div>
       <div className='flex  gap-4 py-3  px-2'>
          <div className='mt-1 h-10 w-10 bg-green-500 flex justify-center items-center rounded-lg text-white'><IoCallOutline size={20} /></div>
       <div>
         <p className='text-md font-medium '>Phone</p>
        <p className='text-md  '>+91 XXXXXXXX25</p>
       </div>
      </div>
       <div className='flex  gap-4 py-3 px-2'>
          <div className='mt-1 h-10 w-10 bg-purple-500 flex justify-center items-center rounded-lg text-white'><IoLocationOutline size={20} /></div>
       <div>
         <p className='text-md font-medium '>Location</p>
        <p className='text-md  '>Jharkhand (INDIA)</p>
       </div>
      </div>


      
  

    </div>
    <div className="bg-white shadow-lg p-6 rounded-xl sm:w-150 w-100 ">
        <h4 className="text-xl font-semibold py-2 px-4">Connect with me</h4>
        <div className='flex  gap-4 py-2 px-4  items-center text-gray-500'>
          <a href="https://github.com/Hussainafridi/Afridi-port" target="_blank"
          rel="noopener noreferrer"><div className=' flex justify-center items-center '><FiGithub size = {22}/></div></a>
         <a href="https://github.com/Hussainafridi/Afridi-port" target="_blank"
          rel="noopener noreferrer"><p className='text-lg font-normal '>GitHub Profile</p></a>

      </div>
       <div className='flex  gap-4 py-3 items-center  px-4 text-gray-500 '>
          <a href=""><div className=' flex justify-center items-center '><FiLinkedin size ={22} /></div></a>
         <a href=""><p className='text-lg font-normal '>Linkedin Profile</p></a>
      </div>
       <div className='flex  gap-4 py-3 items-center  px-4 text-gray-500 '>
          <a href="/public/Hussainafridi_CV.pdf"target="_blank"
          rel="noopener noreferrer"
          ><div className=' flex justify-center items-center '><LuArrowDownToLine size ={22} /></div></a>
         <a href="/public/Hussainafridi_CV.pdf" target="_blank"
          rel="noopener noreferrer"><p className='text-lg font-normal '>Download Resume</p></a>
      </div>
    </div>





























  </div>
    </div>
    </div>


  )
}

export default Contact