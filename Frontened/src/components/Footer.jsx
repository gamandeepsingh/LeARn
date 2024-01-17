import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
  <footer className="relative bg-gray-300 bg-opacity-0 pt-8 pb-6 m-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-400">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none transition-all duration-200 mr-2 hover:-translate-y-2" type="button">
            <i className="fab fa-twitter "></i></button>
            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition-all duration-200  hover:-translate-y-2" type="button">
            <i className="fab fa-facebook"></i></button>
            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition-all duration-200 hover:-translate-y-2" type="button">
            <i className="fab fa-instagram"></i></button>
            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition-all duration-200 hover:-translate-y-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">About Us</Link>
              </li>
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Blog</Link>
              </li>
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Github</Link>
              </li>
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Free Products</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">MIT License</Link>
              </li>
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Terms &amp; Conditions</Link>
              </li>
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Privacy Policy</Link>
              </li>
              <li  className='transition-all duration-200 hover:-translate-x-2'>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><Link to="#" className="text-blueGray-500 hover:text-gray-800" target="_blank"> leARn by</Link>
          <Link to="#" className="text-blueGray-500 hover:text-blueGray-800">Team Cult</Link>.
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}
