import React, { useContext } from "react";
import { LoginContext } from "../../context/AuthContext";
import Logout from "../auth/logout/Logout";
// import Room from "../rooms/Rooms";

// import { Contact } from "../Contact/Contact";

import {NavLink} from 'react-router-dom'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faArrowRight,faStar}from "@fortawesome/free-solid-svg-icons"
import "./Home.css";
import Slide from "../header/Slide";
import RoomsSuites from "./RoomsSuites";
// import Header from "../header/Header";
function Home() {
  const { login } = useContext(LoginContext);
  

  return (
    // <div>
    //   <div>
    //     {/* <Room />
    //     <Contact /> */}
    //   </div>
    <div className="home">       
      {login ? <Logout /> : null}
      <Slide/>
      <div className='content'> 
        <NavLink  className=" buttonn font-serif flex hover:bg-white " to="/auth">VIEW OUR ROOM <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
      </div>
      <section className="welcome pd-100">
        <div className="container-welcome">
          <div className="grid grid-flow-col">
                <div className="left  ">
                  <div className="section-title ">
                    <div className="sub-title">WELCOME</div>
                    <div className=" title-name">Upgrade Your <br/>Experience</div>
                  </div>
                  <div className="right-p">Enjoy sweeping water views when you reserve a Hudson River View Suite.<br/> Spread out in an Executive or Luxury Suite with over 700<br/> square feet of lavish living areas with integrated technology.<br/> Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas.</div>
                  <NavLink  className=" buttonn font-serif flex hover:bg-white " to="/Book">READ MORE <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
                </div>
                <div className="right grid grid-flow-col">
                  <div className="img-left  ">
                    <img src="https://erios.webhotel.vn/images/home1_erios01.jpg" alt=""></img>
                  </div>
                </div>
          </div>
        </div>
      </section>
    <RoomsSuites/>
     <div className="specials">
        <div className="container-special">
        <div className="section-title">
            <div className="sub-title caret-white">OUR SPECIALS</div>
            <div className=" title-name">Where Simple Luxury vs <br/> Tranquility Meet</div>
            <div className="right-p mt-16">Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700<br/> square feet of lavish living areas with integrated technology.<br/> Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas.</div>
        </div>
        <div className="special-content">  
            <div className="grid grid-cols-2 ">            
              <img className="special-img" src="https://erios.webhotel.vn/images/h3-meeting.jpg" alt=""/>
              <div className="special-ct">
                <div className="sp-title">Restaurants vs Bars</div>
                <div className="sp-des">Within famous entrance are some of the top London restaurants and bars, we welcome guests for a inspiring culinary experience.</div>
                <NavLink  className=" buttonn font-serif flex hover:bg-white " to="/Book">LEARN MORE <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
              </div>
              <div className="special-ct">
                <div className="sp-title">Meetings vs Events</div>
                <div className="sp-des">Achieve more with every meeting and event you plan with us. Create priceless experiences that are engaging and productive.</div>
                <NavLink  className=" buttonn font-serif flex hover:bg-white " to="/Book">LEARN MORE <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
              </div>
              <img className="special-img" src="https://erios.webhotel.vn/images/h3-restaurantbar.jpg" alt=""/>
              <img className="special-img" src="https://erios.webhotel.vn/images/h3-weddings.jpg" alt=""/>
              <div className="special-ct">
                <div className="sp-title">Weddings vs Celebrations</div>
                <div className="sp-des">Within famous entrance are some of the top London restaurants and bars, we welcome guests for a inspiring culinary experience.</div>
                <NavLink  className=" buttonn font-serif flex hover:bg-white " to="/Book">LEARN MORE <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
              </div>
            </div>
        </div>
      </div>
   </div>
  <div className=" testimonials">
    <div className="section-title">
            <div className="sub-title caret-white">testimonials</div>
            <div className=" title-name">What Customer Say</div>            
    </div>
    <div className="grid grid-cols-3">
      <div className="tripadvisor">
        <img className="icon-trip "  src="https://erios.webhotel.vn/images/tripadvisor-logo-BDB616E7F6-seeklogo.com.png" alt=""/>
        <p className="tt">5.0</p>
        <div >
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        </div>
        <p className="text text-white">3,000 Review</p>
        <NavLink  className=" button font-serif flex hover:bg-amber-500 " to="/auth">WRITE A Review <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
      </div>
      <div className="testimonials">
        <p className="text-2xl font-bold ">Excellent hotel</p>
        <div className="text text-base scroll-pb-5"> We stayed here for a long weekend and was very impressed with the hotel, the staff were excellent,very friendly and couldn't do enough for us.Rooms were very nice , clean and comfortable.</div>
        <div className="rate ">
        <FontAwesomeIcon className="star " icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        </div>
        <div className="avatar" >
        <img className="rounded-full" src="https://erios.webhotel.vn/images/testimonial4.jpg" alt=""/>
        </div>
        <p className="text">May 20,2022</p>
      </div>
      <div className="testimonials">
        <p className="text-2xl font-bold ">Excellent hotel</p>
        <div className="text text-base scroll-pb-5"> We stayed here for a long weekend and was very impressed with the hotel, the staff were excellent,very friendly and couldn't do enough for us.Rooms were very nice , clean and comfortable.</div>
        <div className="rate ">
        <FontAwesomeIcon className="star " icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        <FontAwesomeIcon className="star" icon={ faStar }/>
        </div>
        <div className="avatar" >
        <img className="rounded-full" src="https://erios.webhotel.vn/images/testimonial4.jpg" alt=""/>
        </div>
        <p className="text">May 20,2022</p>
      </div>

    </div>

  </div>
    </div>
  );
  }

export default Home;
