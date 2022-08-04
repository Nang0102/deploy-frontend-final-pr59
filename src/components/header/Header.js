import React, { useState } from 'react'
import "./header.css"
import {NavLink} from 'react-router-dom'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faArrowRight}from "@fortawesome/free-solid-svg-icons"

function Header() {
const activeClass=(params)=>{
    return params.isActive?"active-menu":"active-menu-items";
};

const [navbar,setNavbar] = useState(false);
const changeBackground =()=>{
  if(window.scrollY>=80){
    setNavbar(true);
  }else{
    setNavbar(false);
  }
 
};
window.addEventListener('scroll',changeBackground);
  return (
    <div className=' container '>
        <div className={navbar ? 'nav-active':'nav'}>
            <div className='flex flex-nowrap container-item'>
                <NavLink to="/"> <img
                    className={navbar ? 'logo-active':'logo'}
                    src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
                    alt=""/></NavLink>
                    <ul className=' menu'>
                      <li>  <NavLink  className={activeClass} to="/Home">HOME</NavLink></li>
                      <li><NavLink className={activeClass} to="/The Hotel">THE HOTEL </NavLink></li>
                      <li> <NavLink className={activeClass} to="/Rooms">ROOMS </NavLink></li>
                      <li><NavLink  className={activeClass} to="/Amenities">AMENITIES </NavLink></li>
                     
                      <li><NavLink className={activeClass} to="/Gallery">GALLERY </NavLink></li>
                      <li><NavLink  className={activeClass} to="/Page">PAGE </NavLink></li>
                      <li><NavLink className={activeClass} to="/Contact">CONTACT </NavLink> </li>
                    </ul>
                    
                    <NavLink  className=" button font-serif flex hover:bg-amber-500 " to="/auth">Login <FontAwesomeIcon icon={faArrowRight} /> </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header
