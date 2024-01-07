import React from 'react'
import './header.css'
import Lazyloader from '../lazyloading/Lazyloader'
import logo_img from '../../assets/animation.png'
function Header() {
  return (
    <div className='header_container'>
        <div className="header_logo">
           <a href="/"><Lazyloader src={logo_img} /></a> 
        </div>
        <div className="header_content">
            <ul className="header_content_list">
                <li className="content_item"><a href="/project">Project</a></li>
                <li className="content_item"><a href="/about">About</a></li>
                <li className="content_item"><a href="/resume">Resume</a></li>
                <li className="content_item"><a href="/contact">Contanct</a></li>
                <li className="content_item"><a target='_blank' href="https://github.com/sau45">Github</a></li>
                <li className="content_item"><a target='_blank' href="https://www.linkedin.com/in/connect-saurav">Linkedin</a></li>
                <li className="content_item"><a target='_blank'   href="https://twitter.com/NxZUkdPa">Twitter</a></li>
            </ul>
        </div>
        <div className="hamberger_menu"><Lazyloader src={"https://img.icons8.com/?size=50&id=3096&format=png"}/></div>
      
    </div>
  )
}

export default Header
