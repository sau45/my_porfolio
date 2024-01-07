import React from 'react'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import projectdata from './projectobject.json'
import './project.css'
import Lazyloader from '../lazyloading/Lazyloader'
import LearnTech from '../learntech/LearnTech'

function Project() {
    return (
        <ContentWrapper>

            <div className='project_container'>
                <h1>Project</h1>
                {projectdata?.map((item,index) => (
                    <div className='project_item' key={index}>
                        <div className="name_image">
                            <p>{item?.name}</p>
                            <Lazyloader src={item?.image} alt={item?.alt} />

                        </div>
                        <div className="description_tech_codelink_container">
                            <p>{item?.description}</p>
                            <p>{item?.features}</p>
                            <p>{item?.technologies}</p>
                           
                        </div>
                        <div className="code_link">
                                <a target='_blank' rel="noreferrer" href={item?.deployed_link}>deployed link <Lazyloader src={"https://chrischindev.com/assets/externallink2.png"}/></a>
                                <a target="_blank" rel="noreferrer" href={item?.github_link}>github link <Lazyloader src={"https://chrischindev.com/assets/github3.png"}/></a>
                            </div>

                    </div>
                ))}

            </div>
            <LearnTech/>
        </ContentWrapper>
    )
}

export default Project
