import React,{useEffect} from 'react'
import "./about.css"
import gif from '../assets/cat.gif'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
   Aos.init({duration:1200})
  },[])
  
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" id='about' className='w-full max-w-[1080px] min-h-screen overflow-x-hidden flex justify-center items-center mx-2'>
      <div className='about-container flex flex-col justify-between items-center'>
            <h1 className='text-[8vh] font-[repo-extrabold] text-red-500 underline mt-2 smalling-text'>About leARn</h1>
            {/*  */}
            <div className='w-full about-text-container p-12 flex justify-evenly flex-wrap'>
                <p className='w-[100%] sm:py-2 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] text-gray-400 font-[repo-light] ' data-about-para>
                leARn, developed by TEAM Cult for the Google Solution Challenge, revolutionizes education through innovative Augmented Reality (AR) technologies.
                leARn bridges educational gaps, contributing to achieving United Nations Sustainable Development Goals.
        </p>
        <h2>Technology Stack</h2>
        <p className='w-[100%] sm:py-2 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] text-gray-400 font-[repo-light] ' data-about-para>
            leARn utilizes cutting-edge technologies like OpenCV, deep learning, React, Django, and Google technologies to ensure a robust and efficient learning experience.
        </p>

        <h2>SDGs we address</h2>
        <p className='w-[100%] sm:py-2 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] text-gray-400 font-[repo-light] ' data-about-para>
            leARn actively contributes to SDGs, including Quality Education (SDG 4), Industry, Innovation, and Infrastructure (SDG 9),
            Reduced Inequalities (SDG 10), and Partnerships for the Goals (SDG 17).
        </p>

        <h2>Showstoppers</h2>
        <p className='w-[100%] sm:py-2 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] text-gray-400 font-[repo-light] ' data-about-para>
            Innovative features include augmenting audio, video, 3D animation, and providing meanings of difficult words on each page,
            enhancing the overall learning experience for every student.
        </p>
                <div className=' rounded-2xl object-contain overflow-hidden'>
                    <img src={gif} width="400px" height="100%" alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}
