import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <div className='text-white max-w-[1080px] w-full flex justify-between flex-wrap bg-black min-h-[80vh] mx-2 mb-[10vh]'>
      {/* left */}
      <div className='flex flex-col  justify-between items-start w-[100%] lg:w-[45%] xl:w-[45%]'>
        {/* text */}
        <div>
          <h1 className='text-[3rem]'>Let's Discuss on Something <span className='text-[red]'>cool</span> together</h1>
        </div>

        <div className='flex flex-col justify-start gap-6'>
            <div className='flex justify-center  rounded-md items-center gap-4 py-2 px-6 border border-black hover:border-red-500 hover:border transition-all duration-200 ease-in'>
               
              <a href='mailto:gamandeepsingh4@gmail.com' className='text-lg flex justify-center'><IoIosMail fontSize={30} color='red'className='mr-6' />learn@gmail.com</a>
            </div>
            <div className='flex justify-center items-center gap-4 py-2 px-6 border border-black hover:border-red-500 hover:border  rounded-md transition-all duration-200 ease-in'>
               
              <a href='tel:6394003592' className='text-lg flex justify-center'><FaPhoneAlt fontSize={30} color='red' className='mr-6'/>+91 6394003592</a>
            </div>
            <div className='flex justify-center items-center gap-4 py-2 px-6 border border-black hover:border-red-500 hover:border  rounded-md transition-all duration-200 ease-in'>
              
              <p className='text-lg flex justify-center'><FaLocationDot fontSize={30} color='red' className='mr-6'/>KIET,DELHI-NCR</p>
            </div>
        </div>

        <div className='flex justify-center items-center gap-10 pl-6 '>
          <FaGithub fontSize={30} color='red'/> <FaInstagram fontSize={30} color='red'/> <FaXTwitter fontSize={30} color='red'/>
        </div>

      </div>
      {/* right */}
      <div>
          <div>
            <p>I'm interested in </p>
            <div>
              <span>UI/UX Designer</span>
              <span>Web Design</span>
              <span>Graphic Design</span>
              <span>Design System</span>
              <span>Other</span>
            </div>
          </div>
          <form action="" className='flex flex-col'>
            <input type="text"
            placeholder='Your name'
            />
            <input type="email"
            placeholder='Your email'
            />
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button type='submit'>
              <IoIosSend/>
              <span>Send Message</span>
            </button>
          </form>
      </div>
    </div>
  )
}
