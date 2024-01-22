import React from 'react'
import './name&profession.css'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { sliderVariants, textVariants } from '../motionVariants/MotionVariants'
import { motion } from 'framer-motion'
import JobRole from './JobRole'
import { Link } from 'react-router-dom'





function NameAndProfession() {
    return (
        <ContentWrapper>

            <div className='name_container'>
                <div className="name_content">
                    <h3>Hello ! My name is</h3>
                    <h1>Saurav Bharti</h1>
                    <div className="job_role">
                    <h3>I'm a </h3>
                        <motion.div
                            className="role"
                            variants={textVariants}
                        >
                            <JobRole/>
                        </motion.div>

                    </div>
                   
                </div>
                <div className="view_project">
                    <Link to="/project">View Project</Link>
                </div>
                {/* Background Slider */}
                <motion.div
                    className="backslide"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    Software Developer Freelancer
                </motion.div>

            </div>
        </ContentWrapper>
    )
}

export default NameAndProfession
