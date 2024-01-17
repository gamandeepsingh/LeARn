import React, { useState } from 'react'
import Carousel from './Carousel';
import "./testimonial.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import img from "../../assets/team-members/gamandeep.jpeg"
export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Student",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, ",
      icon: img,
    },
    {
      title: "Teacher",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      icon: img,
    },
    {
      title: "Student",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of code.",
      icon:img,
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
