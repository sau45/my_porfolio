import React from 'react'
import './about.css'
import Lazyloader from '../lazyloading/Lazyloader'
import profile_img from '../../assets/profileimage.jpeg'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import LearnTech from '../learntech/LearnTech'
import { motion } from 'framer-motion'



function About() {
  return (
    <ContentWrapper>

    <motion.div
    initial={{
      opacity:0, 
      scale:0
    }}
    
    whileInView={{
      opacity:1,
      scale:1
    }}

    transition={{duration:0.6}}
    viewport={{once:true}}
     className='about_container'>
        <motion.div 
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1}}

         className="about_headline"><h1>About Me</h1></motion.div>
        <div 
        initial={{y:-1000}}
        animate={{y:0}}
        
        className="img_about_text">
            <div className="about_img">
                <Lazyloader src={profile_img}/>
            </div>
            <div className="text">
                <p>
                As a <i><span style={{fontWeight:"bold",color:"#53ed6a"}}>Computer Science Engineering</span></i> student at Panjab University Swami Sarvanand Giri Regional Center, I am deeply passionate about technology and eager to contribute to the ever-evolving field of computer science. My academic journey has equipped me with a strong foundation in programming languages, <i><span style={{fontWeight:"bold"}}>algorithms</span></i> , and <i><span style={{fontWeight:"bold"}}>software development.</span></i> Through hands-on projects and coursework, I have honed my skills in areas such as web development, data structures, and machine learning.
         
                My portfolio reflects my <i><span style={{fontWeight:"bold"}}>commitment to excellence</span></i>, showcasing projects that demonstrate both creativity and technical proficiency. I have actively sought opportunities to expand my knowledge, participating in coding competitions, hackathons, and collaborative initiatives. Additionally, my portfolio highlights my ability to adapt to emerging technologies and <i><span style={{fontWeight:"bold"}}>solve real-world problems</span></i> through innovative solutions. As I continue to grow as a tech enthusiast, my portfolio stands as a testament to my dedication to pushing the boundaries of what is possible in the realm of computer science.
                </p>
               
                </div>
        </div>
      
      
    </motion.div>
    <LearnTech />
    </ContentWrapper>
  )
}

export default About
