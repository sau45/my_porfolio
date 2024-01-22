import React, { useState } from 'react'
import './header.css'
import Lazyloader from '../lazyloading/Lazyloader'
import logo_img from '../../assets/animation.png'
import { TfiClose } from "react-icons/tfi";
import { Link } from 'react-router-dom';

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
           <Link to="/"><Lazyloader src={logo_img} /></Link> 
        </div>
        <div className={ mobileView ?"header_content":" header_content_active"}>
            <ul className={mobileView ?"header_content_list":"header_content_list_active"}>
                <li className="content_item"><Link to="/project">Project</Link></li>
                <li className="content_item"><Link to="/about">About</Link></li>
                <li className="content_item"><Link to="/resume">Resume</Link></li>
                <li className="content_item"><Link to="/contact">Contanct</Link></li>
                <li className="content_item"><Link target='_blank' to="https://github.com/sau45">Github</Link></li>
                <li className="content_item"><Link target='_blank' to="https://www.linkedin.com/in/connect-saurav">Linkedin</Link></li>
                <li className="content_item"><Link target='_blank'   to="https://twitter.com/NxZUkdPa">Twitter</Link></li>
            </ul>
        </div>
        
        <div className={mobileView ? "for_mobile_view":"for_mobile_view_active"}>
        {mobileView ? (<div className="hamberger_menu" onClick={hambergerMenu}><Lazyloader src={"https://img.icons8.com/?size=50&id=3096&format=png"}/></div>):( <div className='close_menu' onClick={handleClose}><TfiClose/></div>)}
       
        </div>
      
    </div>
  )
}

export default Header
