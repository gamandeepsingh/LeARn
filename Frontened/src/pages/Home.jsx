import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
export default function Home() {
    
    return (
        <>
        <div className='mt-[5vh] w-[100%] max-w-[1080px] h-full flex flex-col items-center  overflow-hidden'>
            <Hero/> 
            
        </div>
        <div className=' w-screen h-screen flex justify-center items-center'>
            <About/>
        </div>
        </>
    )
}
