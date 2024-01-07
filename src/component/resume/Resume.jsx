import React from 'react'
import './resume.css'
import Lazyloader from '../lazyloading/Lazyloader'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import resume from '../../assets/myresume.pdf'

function Resume() {
    return (
        <ContentWrapper>

            <div className='resume_container'>
                <h1>Resume</h1>
                <div className="resume_content">
                    <div className="view_resume">
                        <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1I5sPapf8pRHv28E0ZKJuEP44yTguU92F/view?usp=sharing">View Rsume <Lazyloader src={"https://chrischindev.com/assets/viewfile.png"} /></a>
                    </div>
                    <div className="download_resume">
                        <a href={resume}>Download Resume <Lazyloader src={"https://chrischindev.com/assets/download.png"} /> </a>

                    </div>

                </div>

            </div>
        </ContentWrapper>
    )
}

export default Resume
