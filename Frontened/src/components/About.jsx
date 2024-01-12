import React from 'react'
import "./about.css"
import gif from '../assets/giphy.gif'
export default function About() {
  return (
    <div className='w-full max-w-[1080px]  h-screen overflow-x-hidden flex justify-center items-center mx-2'>
      <div className='about-container flex flex-col justify-between items-center'>
            <h1 className='text-[8vh] font-[repo-extrabold] text-red-500 underline mt-2'>About leARn</h1>
            {/*  */}
            <div className='w-full about-text-container p-12 flex justify-evenly flex-wrap'>
                <p className='w-[50%] text-gray-400 font-[repo-light]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ratione accusamus natus provident, vitae animi omnis veritatis quas! Eius officia sit exercitationem harum non neque ab laboriosam. Blanditiis voluptatem rerum tempore itaque nam mollitia necessitatibus est nemo iusto architecto! Tenetur deleniti aperiam rerum. Dicta voluptatem, nemo cupiditate quibusdam, natus error exercitationem est quo ab expedita porro architecto eos cumque at. Facere exercitationem expedita asperiores unde omnis sunt vel cum aut itaque, consequuntur laborum aliquid deleniti, doloremque atque. Pariatur obcaecati eos ducimus sit. Magnam iste quasi vero odio doloribus corrupti eaque similique, quo error assumenda illum explicabo incidunt, excepturi, dolor aliquid!</p>
                <div className='h-[250px] w-[250px] rounded-2xl object-contain overflow-hidden'>
                    <img src={gif} width="100%" alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}
