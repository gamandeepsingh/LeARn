import React from 'react'
import Typed from 'react-typed';
import './Hero.css'
import { IoCamera } from "react-icons/io5";
import logo from "./logo.png"
export default function Hero() {
  return (
    <div className='w-screen flex justify-center items-center min-h-[95vh] flex-wrap bg-black' data-hero-container>

      {/* left */}
      <div className='w-max h-[80%] text-white flex flex-col justify-center  text-start overflow-x-hidden'>
        <h1 className='text-[15vh] font-[repo-extrabold]  ml-4' data-hero-heading>leARn</h1>
        <Typed
          strings={[
            'Empowering Every Mind!',
            'Inclusive Education!',
            'For a Sustainable Tomorrow!'
          ]}
          typeSpeed={40}
          backSpeed={50}
          cursorChar='!'  // Use cursorChar to set the cursor character
          style={{ color: 'white' , fontFamily:"repo-light" }}  // Use 'color' to set the cursor character color
          loop
        >
        <input className='bg-black ml-4 text-[5vh]  responsive-input' type="text" data-hero-input disabled/>

        </Typed>  
        <ul className='font-[repo-light] text-gray-300 list-none decoration-none ml-4 space-y-3 mt-8'>
          <li><span className='text-xl'>• </span>Empowering Every Mind, Without Boundaries</li>
          <li><span className='text-xl'>• </span>Nurturing Minds, Igniting Potential</li>
          <li><span className='text-xl'>• </span>Education for All</li>
        </ul>
        <button className="hero-camera w-32 mt-4 ml-4">
        <IoCamera fontSize={60}/>
          <span class="now">now!</span>
          <span class="play">Open</span>
        </button>

      </div>
      {/* right */}
      <div className='h-[80%]'>
            <img src={logo} width={"300px"} alt="" />
      </div>
    </div>
  )
}
