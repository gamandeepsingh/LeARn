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
                <p className='w-[100%] sm:py-2 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] text-gray-400 font-[repo-light] ' data-about-para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ratione accusamus natus provident, vitae animi omnis veritatis quas! Eius officia sit exercitationem harum non neque ab laboriosam. Blanditiis voluptatem rerum tempore itaque nam mollitia necessitatibus est nemo iusto architecto! Tenetur deleniti aperiam rerum. Dicta voluptatem, nemo cupiditate quibusdam, natus error exercitationem </p>
                <div className=' rounded-2xl object-contain overflow-hidden'>
                    <img src={gif} width="400px" height="100%" alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}
