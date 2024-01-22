import React from 'react'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import projectdata from './projectobject.json'
import './project.css'
import Lazyloader from '../lazyloading/Lazyloader'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'







function Project() {
    const isMobileView = window.innerWidth <= 700;

    return (
        <>
            <ContentWrapper>

                <div className='project_container'>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >Project</motion.h1>
                    {projectdata?.map((item, index) => (
                        <div className='project_item' key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}

                                className="name_image">
                                <p>{item?.name}</p>
                                <Lazyloader src={item?.image} alt={item?.alt} />

                            </motion.div>
                            {isMobileView ? (
                                <div className="description_tech_codelink_container">
                                    {/* Content without Framer Motion for mobile view */}
                                    <p>{item?.description}</p>
                                    <p>{item?.features}</p>
                                    <p>{item?.technologies}</p>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ x: -1000 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="description_tech_codelink_container"
                                >
                                    {/* Content with Framer Motion for non-mobile view */}
                                    <p>{item?.description}</p>
                                    <p>{item?.features}</p>
                                    <p>{item?.technologies}</p>
                                </motion.div>
                            )}
                            <div className="code_link">
                                <Link target='_blank' rel="noreferrer" to={item?.deployed_link}>deployed link <Lazyloader src={"https://chrischindev.com/assets/externallink2.png"} /></Link>
                                <Link target="_blank" rel="noreferrer" to={item?.github_link}>github link <Lazyloader src={"https://chrischindev.com/assets/github3.png"} /></Link>
                            </div>

                        </div>
                    ))}

                </div>

            </ContentWrapper>

        </>
    )
}

export default Project
