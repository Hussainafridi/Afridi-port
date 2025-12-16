import React from 'react'
import { CiHeart } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className="w-full h-28 bg-zinc-900 text-white flex items-center justify-center text-lg">
  <h2>© 2025 Afridi Hussain. <CiHeart size ={25} className="inline-block text-red-600" /> Made with React</h2>
</div>
  )
}
export default Footer