import React from 'react'
import "./testimonial.css"
export default function Carousel({ item, width }) {
  return (
    // <div className="carousel-item relative" style={{ width: width}}>
    //   <div className='text-white absolute top-[10%]  font-[repo-medium] text-2xl '>{item.title}</div>
    //   <img className="carousel-img" src={item.icon} width={"100%"} alt=""/>
    //   <div className="carousel-item-text z-10">{item.description}</div>
    // </div>
    <div className='carousel-item' style={{ width: width}}>
      <div className="card">
    <div className="card-image overflow-hidden object-contain"><img src={item.icon} width={"100%"} alt="" /></div>
    <div className="category"> {item.title} </div>
    <div className="heading ">{item.description}
        <div className="author"> By <span className="name">Gaman</span> 4 days ago</div>
    </div>
</div>
    </div>
  )
}
