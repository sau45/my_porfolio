import React, { useState } from 'react'
import './header.css'
import Lazyloader from '../lazyloading/Lazyloader'
import logo_img from '../../assets/animation.png'
import { TfiClose } from "react-icons/tfi";
function Header() {
  const [mobileView,setMobileview]=useState(true);
  const [close,setClose]=useState(false);
  const[hambergermenu,setHambergerMenu]=useState(true);
  const hambergerMenu=()=>{
    setMobileview(false);
    setClose(true);

  }
  const handleClose =()=>{
    setMobileview(true);


  }
 
  return (
    
    <div className= {mobileView ? "header_container":"header_container_active"}>
        <div className={ mobileView ? "header_logo" :"header_logo_active"}>
           <a href="/"><Lazyloader src={logo_img} /></a> 
        </div>
        <div className={ mobileView ?"header_content":" header_content_active"}>
            <ul className={mobileView ?"header_content_list":"header_content_list_active"}>
                <li className="content_item"><a href="/project">Project</a></li>
                <li className="content_item"><a href="/about">About</a></li>
                <li className="content_item"><a href="/resume">Resume</a></li>
                <li className="content_item"><a href="/contact">Contanct</a></li>
                <li className="content_item"><a target='_blank' href="https://github.com/sau45">Github</a></li>
                <li className="content_item"><a target='_blank' href="https://www.linkedin.com/in/connect-saurav">Linkedin</a></li>
                <li className="content_item"><a target='_blank'   href="https://twitter.com/NxZUkdPa">Twitter</a></li>
            </ul>
        </div>
        
        <div className={mobileView ? "for_mobile_view":"for_mobile_view_active"}>
        {mobileView ? (<div className="hamberger_menu" onClick={hambergerMenu}><Lazyloader src={"https://img.icons8.com/?size=50&id=3096&format=png"}/></div>):( <div className='close_menu' onClick={handleClose}><TfiClose/></div>)}
       
        </div>
      
    </div>
  )
}

export default Header
