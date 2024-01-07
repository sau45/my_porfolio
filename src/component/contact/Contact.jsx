import React from 'react'
import './contact.css'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import Lazyloader from '../lazyloading/Lazyloader'

function Contact() {
    return (
        <ContentWrapper>

            <div className='contact_container'>
                <h1>Contact</h1>
                <div className="input">

                    <input type="text" placeholder='Name' required />
                </div>
                <div className="input">

                    <input type="text" placeholder='Email' required />
                </div>
                <div className="input">

                    <textarea type="text" placeholder='message' />
                </div>
                <div className="send_message">
                    <button>send message <Lazyloader src={"https://chrischindev.com/assets/paper-plane.png"}/></button>
                </div>


            </div>
        </ContentWrapper>
    )
}

export default Contact
