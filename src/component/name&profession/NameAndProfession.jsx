import React from 'react'
import './name&profession.css'
import ContentWrapper from '../contentwrapper/ContentWrapper'

function NameAndProfession() {
    return (
        <ContentWrapper>

        <div className='name_container'>
            <div className="name_content">
                <h3>Hello ! My name is</h3>
                <h1>Saurav Bharti</h1>
                <h3>I'm a Software Engineer.</h3>
            </div>
            <div className="view_project">
                <a href="/project">View Project</a>
            </div>

        </div>
        </ContentWrapper>
    )
}

export default NameAndProfession
