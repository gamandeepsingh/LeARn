import React, { useState,useEffect } from 'react'
import Carousel from './Carousel';
import "./testimonial.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import img from "../../assets/team-members/gamandeep.jpeg"
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    Aos.init(1200)
  }, [])
  
  const items = [
    {
      title: "Sarah Johnson(Teacher)",
      description: "leARn has transformed my classroom into an engaging and interactive learning environment. My students are more motivated and excited to learn using AR technology!",
      icon: img,
    },
    {
        title: "John Smith(Parent)",
        description: "As a parent, I'm impressed by how leARn makes learning fun and accessible for my child. It's incredible to see them explore and understand complex concepts with ease.",
        icon: img,
    },
    {
        title: "Emily Rodriguez(Student)",
        description: "Using leARn has been a game-changer for my studies. The AR experiences are immersive and make learning enjoyable. I feel more confident in my subjects!", 
        icon: img,
    },
    {
        title: "Michael Thompson(Educator)",
        description: "leARn's innovative approach to education is commendable. It's empowering educators to deliver impactful lessons and cater to diverse learning styles effectively.", 
        icon: img,
    },
];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length-1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel mx-4 mb-2">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item ,index) => {
          return <Carousel key={index} item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined z-[99]"><FaArrowLeft color='white' /></span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                key={index}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={` ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  } z-[99]`}
                >
                 <FaCircle />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined"><FaArrowRight  color='white'/></span>
        </button>
      </div>
    </div>
  )
}
