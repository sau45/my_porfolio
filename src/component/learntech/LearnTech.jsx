import React from 'react'
import './learntech.css'
import techworkdata from './learntechobject.json'
import { techSkills, toolStacks } from "../about/Skill";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/MotionVariants";
function LearnTech() {
  return (


    <div className='learntech_container'>
      <motion.h1
        initial={{
          opacity:0, 
          scale:0
        }}
        
        whileInView={{
          opacity:1,
          scale:1
        }}
    
        transition={{duration:0.8}}
         >Technologies I've Workded With</motion.h1>
      <div className="all_content">
        <motion.div
          className="motion_container"
          variants={skillsVariants}
          initial="initial"
          whileInView="animate"
        >
          {techSkills.map((skill, i) => (
            <motion.div
              key={skill.id}
              variants={skillsVariants}
              custom={i}
              className="sub_motion_container"
            >
              <skill.icon style={{ color: skill.color }} />
              <p className="text-base">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>


      </div>
      <motion.h1
      initial={{
        opacity:0, 
        scale:0
      }}
      
      whileInView={{
        opacity:1,
        scale:1
      }}
  
      transition={{duration:0.8}}
      >Tools I use</motion.h1>
      <div className="tool_content">

      <div className="all_content">
        <motion.div
          className="motion_container"
          variants={skillsVariants}
          initial="initial"
          whileInView="animate"
          >
          {toolStacks.map((skill, i) => (
            <motion.div
            key={skill.id}
            variants={skillsVariants}
            custom={i}
            className="sub_motion_container"
            >
              <skill.icon style={{ color: skill.color }} />
              <p className="text-base">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

          </div>

      </div>

    </div>

  )
}

export default LearnTech
