import React from 'react'
import M from '../assets/images.jpeg'

export const Feature = () => {
  return (
    <div className="w-full py-16 px-6 bg-[#f6f8f9]" id="Feature">
        <h1 className='text-center text-5xl text-[#705fbe] font-bold mb-14'>Featured Projects</h1>
        <p className='text-center text-xl'>A showcase of my recent work in web development.</p>
        
        <div className="flex    gap-6 py-8  flex-col md:hidden justify-center items-center  ">
             <div className="bg-white shadow-lg p-6 rounded-xl w-80  h-100 hover:scale-105 transition">
        <img
               src={M}
               alt=""
               className="w-65 h-40 sm:w-48 md:w-64 aspect-square object-cover  mx-auto mb-2"
             />
        <h4 className="text-xl font-semibold text-center py-2">Portfolio Website</h4>
        <p className='text-md py-2  text-center'>Created a personal portfolio website to showcase my skills, projects, and experience in web development.</p>
        <p className='text-md py-2 text-center capitalize font-bold'>React JS, Tailwind CSS, Framer Motion.</p>
      </div>
      <div className="bg-white shadow-xl p-6 rounded-xl w-80  h-100 hover:scale-105 transition">
       <img
               src={M}
               alt=""
               className="w-65 h-40 sm:w-48 md:w-64 aspect-square object-cover  mx-auto mb-2"
             />
        <h4 className="text-xl font-semibold text-center">Sharing WebApp</h4>
        <p className='text-md py-2  text-center'>Created the frontend of a sharing web app using HTML, CSS, and JavaScript. Designed a clean, responsive, and user-friendly interface that allows users to upload and share content.</p>
        <p className='text-md py-1 text-center capitalize font-bold'>HTML, CSS, JavaScript.</p>
      </div>
           
      <div className="bg-white shadow-lg p-6 rounded-xl w-80  h-100 hover:scale-105 transition">
        <img
               src={M}
               alt=""
               className="w-65 h-40 sm:w-48 md:w-64 aspect-square object-cover  mx-auto mb-2"
             />
        <h4 className="text-xl font-semibold text-center py-1">Lorem</h4>
        <p className='text-md   text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugit voluptas sunt eaque eligendi explicabo, quia accusamus!.</p>
        <p className='text-md py-1 text-center capitalize font-bold'>Lorem ipsum dolor sit.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl w-80  h-100 hover:scale-105 transition">
        <img
               src={M}
               alt=""
               className="w-65 h-40 sm:w-48 md:w-64 aspect-square object-cover  mx-auto mb-2"
             />
        <h4 className="text-xl font-semibold text-center py-1">Lorem</h4>
        <p className='text-md   text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugit voluptas sunt eaque eligendi explicabo, quia accusamus!.</p>
        <p className='text-md py-1 text-center capitalize font-bold'>Lorem ipsum dolor sit.</p>
      </div>
      </div>

      {/* mediun onward */}
<div className=' gap-6  md:flex flex-row py-10 px-12 hidden ' id='Feature'>
 <div className="bg-white shadow-lg p-6 rounded-xl md:w-90  md:h-120 hover:scale-105 transition">
       <img
               src={M}
               alt=""
               className="w-40 sm:w-40 h-50 md:w-65 aspect-square object-cover  mx-auto mb-4"
             />
        <h4 className="text-xl font-semibold text-center py-2">Portfolio Website</h4>
        <p className='text-md py-2  text-center'>Created a personal portfolio website to showcase my skills, projects, and experience in web development.</p>
        <p className='text-md py-2 text-center capitalize font-bold'>React JS, Tailwind CSS, Framer Motion.</p>
      </div>



      <div className="bg-white shadow-lg p-6 rounded-xl md:w-90  md:h-120 hover:scale-105 transition">
       <img
               src={M}
               alt=""
               className="w-40 sm:w-40 h-50 md:w-65 aspect-square object-cover  mx-auto mb-4"
             />
        <h4 className="text-xl font-semibold text-center py-2">WebApp</h4>
       <p className='text-md py-2  text-center'>Created the frontend of a sharing web app using HTML, CSS, and JavaScript. Designed a clean, responsive, and user-friendly interface that allows users to upload and share content.</p>
        <p className='text-md py-2 text-center capitalize font-bold'>HTML, CSS, JavaScript.</p>
      </div>
       <div className="bg-white shadow-lg p-6 rounded-xl md:w-90  md:h-120 hover:scale-105 transition">
       <img
               src={M}
               alt=""
               className="w-40 sm:w-40 h-50 md:w-65 aspect-square object-cover  mx-auto mb-4"
             />
        <h4 className="text-xl font-semibold text-center py-2">Lorem</h4>
        <p className='text-md py-2  text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugit voluptas sunt eaque eligendi explicabo, quia accusamus!.</p>
        <p className='text-md py-2 text-center capitalize font-bold'>Lorem ipsum dolor sit.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl md:w-90  md:h-120 hover:scale-105 transition">
        <img
               src={M}
               alt=""
               className="w-40 sm:w-40 h-50 md:w-65 aspect-square object-cover  mx-auto mb-4"
             />
        <h4 className="text-xl font-semibold text-center py-2">Lorem</h4>
        <p className='text-md py-2  text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugit voluptas sunt eaque eligendi explicabo, quia accusamus!.</p>
        <p className='text-md py-2 text-center capitalize font-bold'>Lorem ipsum dolor sit.</p>
      </div>

    </div>
      {/* <div className="flex justify-center flex-col items-center gap-4 py-8 md:hidden">
      <div className="bg-white shadow-lg p-6 rounded-xl w-90  h-120 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Frontend</h4>
        <p className='text-md py-2 '>React, CSS, Tailwind CSS</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl w-90  h-120 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Language</h4>
       < p className='text-md py-2 '>JavaScript, python, HTML</p>
      </div>

      <div className="bg-white shadow-xl p-6 rounded-xl w-90 h-120  hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Database</h4>
        < p className='text-md py-2'>MySQL, MongoDB</p>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-xl w-90  h-120 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Tools</h4>
        < p className='text-md py-2'>Figma, VS-Code, </p>
      </div>
    </div> */}
        
        
        
        
        
        </div>
  )
}
