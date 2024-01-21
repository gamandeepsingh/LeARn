import React,{useEffect} from 'react'
import Typed from 'react-typed';
import './Hero.css'
import { IoCamera } from "react-icons/io5";
import logo from "../assets/logo.png"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(() => {
    Aos.init({duration:1000})
   },[])

  return (
    <div className='w-full flex justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between items-center h-full flex-wrap relative  overflow-visible z-10' data-hero-container>
      {/* animation */}
     <div className='hero-anime-1 absolute'></div>
     <div className='hero-anime-2 absolute'></div>
      {/* left */}
      <div data-aos="fade-right" data-aos-offset="500" className='w-max h-[80%] text-white flex flex-col items-center sm:items-center md:items-start lg:items-start xl:items-start justify-center  text-start mb-[15vh]'>
        <h1 className='text-[18vh] font-[repo-extrabold]  ml-4' data-hero-heading>leARn</h1>
        <Typed
          strings={[
            'Empowering Every Mind!',
            'Inclusive Education!',
            'A Sustainable Tomorrow!'
          ]}
          typeSpeed={40}
          backSpeed={50}
          cursorChar='!'  
          style={{ color: 'white' , fontFamily:"repo-light" }}  
          loop
        >
        <input className=' ml-4  responsive-input' type="text" data-hero-input disabled/>

        </Typed>  
        <ul className='font-[repo-light] text-gray-300 list-none decoration-none ml-4 space-y-3 mt-8'>
          <li><span className='text-xl'>• </span>Empowering Every Mind, Without Boundaries</li>
          <li><span className='text-xl'>• </span>Nurturing Minds, Igniting Potential</li>
          <li><span className='text-xl'>• </span>Education for All</li>
        </ul>
        <button className="hero-camera w-32 mt-4 ml-4">
        <IoCamera fontSize={60}/>
          <span className="now">now!</span>
          <span className="play">Open</span>
        </button>

      </div>
      {/* right */}
      <div data-aos="zoom-in" data-aos-duration="3000" className='h-[80%]'>
            <img src={logo} width={"300px"} alt="" />
      </div>
    </div>
  )
}
