import React,{useEffect} from 'react'
import './teamMember.css'
import gam from '../assets/team-members/gamandeep.jpeg'
import pra from '../assets/team-members/prapti.jpeg'
import ani from '../assets/team-members/aniket.jpeg'
import ano from '../assets/team-members/Anoushka.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function TeamMember() {
    useEffect(() => {
        Aos.init({duration:1200})
       },[])

    const data = [
        {name:"Gamandeep Singh" , domain:"Frontned Developer" ,img:gam},               
        {name:"Prapti Sharma" , domain:"Backend Developer" ,img:pra},               
        {name:"Aryash " , domain:"ML Enthusiast" ,img:gam},    
        {name:"Anoushka Goel" , domain:"AR Developer" ,img:ano},    
    ]
  return (
    <div className='w-full max-w-[1080px]  overflow-x-hidden flex flex-col justify-center items-center mx-2 mb-[20vh]'>
       <h1 data-aos="zoom-in" className='text-[6vh] font-[repo-extrabold] text-white underline mt-2 mb-[10vh] team-heading smalling-text'>Team Members</h1>
       <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 p-4 gap-8 '>
        {
            data.map((item,index)=>{
                return (
                    <div data-aos={`${index%2===0? "flip-right": "flip-left"}`} key={index} className='w-[250px] flex flex-col items-center justify-center team-container gap-6 pt-4'>
                        <div className='team-about block '>
                            <img src={item.img} className='aspect-[1/1]' alt="" />
                        </div>
                        <div className='flex flex-col items-center'>
                        <div className=''>
                            <p className='text-xl font-[repo-bold] text-white '>{item.name}</p>
                        </div>
                        <div>
                            <p className='text-md text-gray-400 '>{item.domain}</p>
                        </div>
                        </div>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}
