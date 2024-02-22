import React, { useEffect } from 'react'
import "./about.css"
import gif from '../assets/cat.gif'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" id='about' className='w-full max-w-[1080px] min-h-screen overflow-x-hidden flex justify-center items-center mx-2'>
      <div className='about-container flex flex-col justify-between items-center'>
        <h1 className='text-[8vh] font-[repo-extrabold] text-red-500 underline mt-2 smalling-text'>About leARn</h1>
        {/*  */}
        <div className='w-full about-text-container p-12 flex justify-evenly flex-wrap'>
          <div className='w-[100%] sm:py-2 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] text-gray-400 font-[repo-light] flex flex-col gap-2' data-about-para>
              <p className=''>leARn, developed by TEAM Cult for the Google Solution Challenge,
            revolutionizes education through innovative Augmented Reality (AR)
            technologies. leARn bridges educational gaps, contributing to
            achieving United Nations Sustainable Development Goals.</p>
            <div>
              <h1 className='font-[repo-extrabold]'>SDGs we address:</h1>
              <p>leARn actively contributes to SDGs, including Quality Education (SDG
            4), Industry, Innovation, and Infrastructure (SDG 9), Reduced
            Inequalities (SDG 10), and Partnerships for the Goals (SDG 17)</p>
            </div>
            <div>
              <h1 className='font-[repo-extrabold]'>Technology Stack:</h1>
              <p>leARn utilizes cutting-edge technologies like OpenCV, deep learning,
            React, Django, and Google technologies to ensure a robust and
            efficient learning experience.</p>
            </div>
            {/* <div>
              <h1></h1>
              <p></p>
            </div> */}
          </div>
          <div className='rounded-2xl object-contain overflow-hidden flex mt-[5vh] sm:mt-[5vh] md:mt-[0vh] lg:mt-0 xl:mt-0'>
            <img src={gif} width="400px" height="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
