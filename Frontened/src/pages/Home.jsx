import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import TeamMember from '../components/TeamMember'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial/Testimonial'
import Faq from '../components/faq/Faq'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'

export default function Home() {
    useEffect(() => {
      Aos.init({duration:1200})
    }, [])
    
    
    return (
        <>
        <div className='mt-[8vh] w-[100%] max-w-[1050px] min-h-[95vh] flex flex-col items-center justify-center '>
            <Hero/>            
        </div>
        <div className=' w-screen h-screen flex justify-center items-center mt-[20vh] sm:mt-[15vh] md:mt-[10vh] lg:mt-0 xl:mt-0'>
            <About/>
        </div>
        <div className=' w-screen flex justify-center items-center mt-[20vh] sm:mt-[20vh] md:mt-[10vh] lg:mt-0 xl:mt-0'>
            <TeamMember/>
        </div>
        <div className='w-screen flex justify-center items-center'>
            <Contact/>
        </div>
        <div className='flex flex-col items-center min-h-[100vh] w-screen mx-4'>
            <h1 data-aos="zoom-in" className='font-[repo-extrabold] text-white text-6xl team-heading mb-6 smalling-text'>Our Testimonials</h1>
            <div className=' w-[100%] sm:w-screen md:w-screen lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
            <Testimonial/>
            </div>
        </div>
        <div className='min-h-screen'>
            <Faq/>
        </div>
        <div className='text-white flex flex-col gap-4 mb-4'>
           <h1 className='text-white text-xl text-center'>Check out the Link:</h1>
           <ul className=' text-red-500 flex gap-4 w-screen justify-center'>
            <li><Link to="https://youtu.be/ZIeRs81zE3M?feature=shared" target='blank'>Youtube Video</Link></li> <span className='text-white'>or</span>
            <li><Link to="https://www.canva.com/design/DAF5-ZM0cjg/JDANLKnDnojey9SH6FCCOw/edit?ui=eyJHIjp7fX0" target='blank'>PPT Link</Link></li>
           </ul>
        </div>
        <div className=''>
            <Footer/>
        </div>
        </>
    )
}
