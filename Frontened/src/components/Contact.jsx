import React, { useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const [selected, setSelected] = useState("UI/UX")
  return (
    <div className='text-white max-w-[1080px] w-full flex justify-center flex-wrap bg-black min-h-[80vh] mx-2 mb-[10vh] gap-10'>
      {/* left */}
      <div className='flex flex-col  justify-between items-start w-[100%] lg:w-[45%] xl:w-[45%]  min-h-[80vh]'>
        {/* text */}
        <div>
          <h1 className='text-[3rem]'>Let's Discuss on Something <span className='text-[red]'>cool</span> together</h1>
        </div>

        <div className='flex flex-col justify-start gap-6'>
            <div className='flex justify-center  rounded-md items-center gap-4 py-2 px-6 border border-black hover:border-red-500 hover:border hover:bg-[red] hover:bg-opacity-25 transition-all duration-100 ease-in'>
               
              <a href='mailto:gamandeepsingh4@gmail.com' className='text-lg flex justify-center'><IoIosMail fontSize={30} color='red'className='mr-6' />learn@gmail.com</a>
            </div>
            <div className='flex justify-center items-center gap-4 py-2 px-6 border border-black hover:border-red-500 hover:border hover:bg-[red] hover:bg-opacity-25  rounded-md transition-all duration-100 ease-in'>
               
              <a href='tel:6394003592' className='text-lg flex justify-center'><FaPhoneAlt fontSize={30} color='red' className='mr-6'/>+91 6394003592</a>
            </div>
            <div className='flex justify-center items-center gap-4 py-2 px-6 border border-black hover:border-red-500 hover:border hover:bg-[red] hover:bg-opacity-25 rounded-md transition-all duration-100 ease-in cursor-pointer'>
              
              <p className='text-lg flex justify-center'><FaLocationDot fontSize={30} color='red' className='mr-6'/>KIET,DELHI-NCR</p>
            </div>
        </div>

        <div className='flex justify-center items-center gap-10 pl-6 '>
          <FaGithub fontSize={30} color='red' className='transition-all duration-200 hover:-translate-y-2'/> 
          <FaInstagram fontSize={30} color='red' className='transition-all duration-200 hover:-translate-y-2'/> 
          <FaXTwitter fontSize={30} color='red' className='transition-all duration-200 hover:-translate-y-2'/>
        </div>

      </div>
      {/* right */}
      <div className='max-w-[500px]  flex flex-col items-start justify-evenly bg-white text-black rounded-xl px-6'>
          <div className='w-full'>
            <p className='font-[repo] m-1'>I'm interested in... </p>
            <div className='font-[repo-light] flex flex-wrap mb-4'>
              <span className='py-2 m-1 px-3 border-2 border-[red] rounded-md hover:text-white hover:bg-[red]
              text-red-400 cursor-pointer'>UI/UX Designer</span>
              <span className='py-2 m-1 px-3 border-2 border-[red] rounded-md hover:text-white hover:bg-[red]
              text-red-400  cursor-pointer'>Web Design</span>
              <span className='py-2 m-1 px-3 border-2 border-[red] rounded-md hover:text-white hover:bg-[red]
              text-red-400  cursor-pointer'>Graphic Design</span>
              <span className='py-2 m-1 px-3 border-2 border-[red] rounded-md hover:text-white hover:bg-[red]
              text-red-400  cursor-pointer'>Design System</span>
              <span className='py-2 m-1 px-3 border-2 border-[red] rounded-md hover:text-white hover:bg-[red]
              text-red-400  cursor-pointer'>Other</span>
            </div>
          </div>
          <form action="" className='flex flex-col w-full  gap-6'>
            <input type="text"
            placeholder='Your name'
            value={"Your name"}
            className='w-full  outline-none focus:outline-none  ring-transparent focus:ring-transparent border-t-0 border-r-0 border-l-0  border-b-4 border-[red] rounded-md'
            />
            <input type="email"
            placeholder='Your email'
            className='w-full outline-none focus:outline-none  focus:ring-transparent 
             border-[red]  border-t-0 border-r-0 border-l-0   border-b-4 rounded-md'
             value={"Your Email"}
            />
            <textarea name="" id="" cols="10" rows="2" placeholder='Your Message'
            className='w-full  outline-none focus:outline-none  focus:ring-transparent  border-[red]  border-t-0 border-r-0 border-l-0  border-b-4 rounded-md pl-3 '
            value={"Your Message"}
            ></textarea>

            <button type='submit' className='flex bg-[red] py-2 px-3 w-fit rounded-xl mt-6 group'>
              <IoIosSend fontSize={30} color='white' className='group-hover:animate-pulse'/>
              <span className='text-xl text-white'>Send Message</span>
            </button>
          </form>
      </div>
    </div>
  )
}
