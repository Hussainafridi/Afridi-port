import React from 'react'

export const Techn = () => {
  return (
    <div className="w-full py-16 px-6 " id="Skills">
        <h1 className='text-center text-5xl text-[#705fbe] font-bold mb-14'>Skills & Technologies</h1>
        <p className='text-center text-xl'>A comprehensive toolkit for building modern web applications.</p>
        <div className='flex justify-center items-center gap-6 py-10 text-center md:flex-row flex-col '>
          <div className='bg-[#f6f8f9] shadow-lg  rounded-xl w-56 cd h-40 hover:scale-105 transition' >
            <div className='flex items-center justify-center gap-3 mt-2'>
               <h4 className='rounded-full bg-amber-500 w-4 h-4'></h4>
            <h4 className="text-xl font-semibold ">Frontend</h4>
            </div>
        <p className='text-md py-4 flex flex-wrap gap-2 justify-center items-center '>
          <span className='mx-1 px-2 rounded-md bg-white '>React</span>
          <span className='mx-1  px-2 rounded-md bg-white '>CSS</span>
          <span className=' mx-1  px-2 rounded-md bg-white'>Tailwind CSS </span>
            <span className=' px-2 rounded-md bg-white '>Framer-Motion</span>
           </p>
            
          </div>
          <div className='bg-[#f6f8f9] shadow-lg  rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition'>
            <div className='flex items-center justify-center gap-3 mt-2'>
               <h4 className='rounded-full bg-green-500 w-4 h-4'></h4>
            <h4 className="text-xl font-semibold ">Language</h4>
            </div>
       < p className='text-md py-4 flex flex-wrap gap-2 justify-center items-center'>
       <span className='mx-1 px-2 rounded-md bg-white '>JavaScript</span>
       <span className='mx-1 px-2 rounded-md bg-white '>python</span>
       <span className='mx-1 px-2 rounded-md bg-white '> HTML</span>
       </p>
            
          </div>
           <div className='bg-[#f6f8f9] shadow-lg  rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition'>
            <div className='flex items-center justify-center gap-3 mt-2'>
               <h4 className='rounded-full bg-blue-500 w-4 h-4'></h4>
            <h4 className="text-xl font-semibold ">Database</h4>
            </div>
        < p className='text-md py-4 flex flex-wrap gap-2 justify-center items-center'>
        <span className='mx-1 px-2 rounded-md bg-white '> MySQL</span>
        <span className='mx-1 px-2 rounded-md bg-white '> MongoDB</span>
        </p>
            
          </div>
           <div className='bg-[#f6f8f9] shadow-lg  rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition'>
            <div className='flex items-center justify-center gap-3 mt-2'>
               <h4 className='rounded-full bg-purple-500 w-4 h-4'></h4>
            <h4 className="text-xl font-semibold ">Tools</h4>
            </div>
        < p className='text-md py-4 flex flex-wrap gap-2 justify-center items-center'>
        <span className='mx-1 px-2 rounded-md bg-white '> Figma</span>
        <span className='mx-1 px-2 rounded-md bg-white '> Canvas</span>
        <span className='mx-1 px-2 rounded-md bg-white '> VS-Code</span>
        <span className='mx-1 px-2 rounded-md bg-white '> Sublime-Text</span>
        
        </p>
            
          </div>
        </div>
        </div>
  )
}
export default Techn;