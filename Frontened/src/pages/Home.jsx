import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import TeamMember from '../components/TeamMember'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
export default function Home() {
    
    return (
        <>
        <div className='mt-[8vh] w-[100%] max-w-[1050px] min-h-[95vh] flex flex-col items-center justify-center '>
            <Hero/>            
        </div>
        <div className=' w-screen h-screen flex justify-center items-center'>
            <About/>
        </div>
        <div className=' w-screen flex justify-center items-center'>
            <TeamMember/>
        </div>
        <div className='w-screen flex justify-center items-center'>
            <Contact/>
        </div>
        <div className=''>
            <Footer/>
        </div>
        </>
    )
}
