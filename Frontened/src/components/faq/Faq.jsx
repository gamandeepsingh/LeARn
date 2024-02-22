import React, { useState ,useEffect} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [
    {
        id: 1,
        title: "What is leARn?",
        content: "leARn, developed by TEAM Cult for the Google Solution Challenge, is an innovative Augmented Reality (AR) educational platform revolutionizing learning experiences. It utilizes cutting-edge technologies to bridge educational gaps and contribute to achieving United Nations Sustainable Development Goals (SDGs).",
    },
    {
        id: 2,
        title: "How does leARn contribute to SDGs?",
        content: "leARn actively contributes to several SDGs, including Quality Education (SDG 4), Industry, Innovation, and Infrastructure (SDG 9), Reduced Inequalities (SDG 10), and Partnerships for the Goals (SDG 17). By leveraging AR technologies, leARn aims to enhance educational accessibility and promote inclusive learning environments.",
    },
    {
        id: 3,
        title: "What technologies does leARn use?",
        content: "leARn utilizes a robust technology stack, including OpenCV, deep learning, React, Django, and Google technologies. These cutting-edge tools ensure a seamless and efficient learning experience for users.",
    },
    {
        id: 4,
        title: "How do I get started with leARn?",
        content: "To begin your educational journey with leARn, visit the website to download the AR application. Simply click on the provided download link to install the app on your device.",
    },
    {
        id: 5,
        title: "How does leARn utilize AR technology?",
        content: "Once you've installed the app, launch it on your device and grant permission to access your device's camera. leARn utilizes AR technology, powered by Unity, to augment 3D models onto your device screen based on real-world objects captured by the camera.",
    },
    {
        id: 6,
        title: "How does leARn recognize objects in pictures?",
        content: "When scanning a picture using the app's camera, leARn utilizes advanced image recognition techniques, including OpenCV and Google Vision API, to identify objects within the picture accurately.",
    },
    {
        id: 7,
        title: "Can I interact with the augmented 3D models?",
        content: "Yes, leARn allows users to interact with the augmented 3D models displayed on their devices. You can explore additional features and information related to the objects by interacting with the models.",
    },
    {
        id: 8,
        title: "What information is displayed alongside the augmented 3D models?",
        content: "Alongside the augmented 3D models, leARn provides relevant information and descriptions about the recognized objects. This additional information enhances the learning experience and provides valuable insights into the objects being studied.",
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
