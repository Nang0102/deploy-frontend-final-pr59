import React from 'react'
import "./RoomsSuites.css"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faAngleRight,faAngleLeft}from "@fortawesome/free-solid-svg-icons"
function RoomsSuites(props) {
  const slideCards =[
    {img:'https://erios.webhotel.vn/images/room-5-768x624.jpg',title:"Luxury Room",description:"20m2 | Balcony| Lake View" ,},
    {img:'https://erios.webhotel.vn/images/room-1-768x624.jpg',title:"Double Room",description:"20m2 | Balcony| Lake View", },
    {img:'https://erios.webhotel.vn/images/room-1-768x624.jpg',title:"Prenium Room",description:"20m2 | Balcony| Lake View", },
    {img:'https://erios.webhotel.vn/images/room-5-768x624.jpg',title:"Luxury Room",description:"20m2 | Balcony| Lake View" }
  ];

  const slideLeft=()=>{
    var slideCards = document.getElementById("slideCards");
    slideCards.scrollLeft= slideCards.scrollLeft -500;
  }
  const slideRight=()=>{
    var slideCards = document.getElementById("slideCards");
    slideCards.scrollLeft= slideCards.scrollLeft +500;
  }
  return (
    <div className='RoomsSuites'>
       <div className="section-title">
            <div className="sub-title caret-white">DISCOVER</div>
            <div className=" title-name">Rooms vs Suites</div>
        </div>
        <div className='slider-card'>
          <div className='main-slider'>
             <FontAwesomeIcon className='angle-left' icon={faAngleLeft} onClick={slideLeft}/>
            <div className='slideCards' id='slideCards'>
            { slideCards.map((slideCard,index)=>{
                return(
                  <div className='card font-serif' key={index}>
                    <div className='card-img' style={{backgroundImage:`url(${slideCard.img})`, backgroundSize:'cover'}}></div>
                    <p className='card-img-title'>{slideCard.title}</p>
                    <p className='card-img-description'>{slideCard.description} </p>
                  </div>
                )
              })
            } 
            </div>
             <FontAwesomeIcon className='angle-right' icon={faAngleRight} onClick={slideRight}/>
          </div>
        </div>
    </div>
  )
}

export default RoomsSuites