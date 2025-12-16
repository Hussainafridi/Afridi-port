import React from 'react'
import Dp from "../assets/Dp.webp"

export const About = () => {
  return (
    <div className="w-full py-16 px-6 bg-[#f6f8f9]" id="about">
  <h1 className="text-center text-5xl text-[#705fbe] font-bold mb-14">
    About Me
  </h1>

  {/* MAIN FLEX WRAPPER */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-20">

    {/* LEFT SECTION */}
    <div className="flex flex-col items-center text-center  md:items-start md:text-left max-w-sm md:max-w-md">
      <img
        src={Dp}
        alt=""
        className="w-40 sm:w-48 md:w-64 aspect-square object-cover rounded-full mx-auto mb-4"
      />

      <h1 className="text-2xl text-black  font-bold">Afridi Hussain</h1>

      <p className="text-lg text-[#666e7a] mt-4 leading-relaxed">
        I am a passionate Full-Stack JavaScript Developer with strong expertise
        in building scalable web and mobile applications using React, Angular,
        Node.js, Express Js, and NestJS. I also have experience in product
        management and delivering real-world solutions for clients. Skilled in
        React Native for mobile app development.
      </p>
    </div>

    {/* RIGHT CARD GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg p-6 rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Frontend</h4>
        <p className='text-md py-2 '>React, CSS, Tailwind CSS, Framer Motion</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Language</h4>
       < p className='text-md py-2 '>JavaScript, python, HTML</p>
      </div>

      <div className="bg-white shadow-xl p-6 rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Database</h4>
        < p className='text-md py-2'>MySQL, MongoDB</p>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-xl w-56 sm:w-60 h-40 hover:scale-105 transition">
        <h4 className="text-xl font-semibold">Tools</h4>
        < p className='text-md py-2'>Figma, VS-Code, </p>
      </div>
    </div>

  </div>
</div>

//     <div className='w-full py-16 px-6 ' id='about'>
//        <h1 className='text-center text-5xl text-[#705fbe] font-bold mb-14'>About Me</h1>
// <div className='flex justify-center items-center gap-14  mb-20 px-80  '>
//       <div className=' flex flex-col items-center text-center md:items-start md:text-left  '> 
//         <img src={Dp} alt="" className="w-40 sm:w-48 md:w-64 aspect-square object-cover rounded-full mx-auto mb-4 " />
//         <h1 className='text-2xl text-[#000000]  font-bold '>
//           Afridi Hussain
//         </h1>
//         <p className=' text-lg text-[#666e7a] sm:w-full  mt-4  max-w-xs md:max-w-md   leading-relaxed'>
//           I am a passionate Full-Stack JavaScript Developer with strong expertise in building scalable web and mobile applications using React, Angular, Node.js, Express Js, and NestJS. I also have experience in product management and delivering real-world solutions for clients. Skilled in React Native for mobile app development.
//         </p>
//       </div>
//       <div className='grid grid-cols-2 gap-25'>
//         <div className='bg-white shadow-lg p-6 rounded-xl w-60  h-40 hover:scale-110' >
// <div className="text-green-500 text-3xl mb-3"> </div>
//         <h4 className="text-xl font-semibold">Front-end</h4>

//         </div>
//         <div className='bg-white shadow-lg p-6 rounded-xl w-60  h-40 hover:scale-110' >
// <div className="text-green-500 text-3xl mb-3"></div>
//         <h4 className="text-xl font-semibold">Front-end</h4>

//         </div>
//         <div className='bg-white shadow-lg p-6 rounded-xl w-60  h-40 hover:scale-110' >
// <div className="text-green-500 text-3xl mb-3"></div>
//         <h4 className="text-xl font-semibold">Front-end</h4>
//         </div>
//       </div>
//       </div>

//     </div>
  )
}
export default About