import React, { useState ,useEffect} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [

    {
        id: 1,
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,ultricies metus at, consequat velit. Curabitur `,
    },
    {
        id: 2,
        title: "Nunc maximus, magna at ultricies elementum",
        content:
            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
        id: 3,
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.`,
    },
    {
        id: 4,
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
    },
    {
        id: 5,
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.`,
    },
    {
        id: 6,
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.`,
    },

];


export default function Faq() {
    const [selected, setSelected] = useState(null)
    useEffect(()=>{
        Aos.init({duration:1200})
    })
    function ClickHandler(id) {
        if (selected !== id)
            setSelected(id)
        else
            setSelected(null)
    }

    return (
        <div data-aos="fade-up" className='w-screen sm:w-screen md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[50vw] transition-all duration-200 '>
            <h1 className=' text-center text-6xl font-[repo-extrabold] team-heading smalling-text'>FAQs</h1>
            <div className='bg-black rounded-xl flex flex-col  w-full mt-6'>
                {
                    data.map((data, index) => {
                        return (
                            <div className='flex flex-col items-center' key={index}>
                                <div className='bg-[#fff] backdrop-blur-lg my-4 w-2/3 py-3 px-5 rounded-xl transition-all duration-400 ease-in'>

                                    <div onClick={() => ClickHandler(data.id)} className='flex flex-row cursor-pointer justify-between items-center'>
                                        <div className='text-xl font'>{data.title}</div>
                                        <div className='transition-all duration-400 ease-in' >{selected === data.id || selected === true ? <FaMinus /> : <FaPlus />}</div>
                                    </div>
                                    {
                                        selected === data.id || selected === true ?
                                            <div className='relative mt-3 transition-all duration-400 ease-in text-gray-800'>
                                                <div className='h-1 w-full absolute bg-gray-300 rounded-3xl -top-1'></div>
                                                {data.content}</div>
                                            :
                                            <div></div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
