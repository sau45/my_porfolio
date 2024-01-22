import React from 'react'
import './footer.css'
import Lazyloader from '../lazyloading/Lazyloader'




function Footer() {
    return (
      

            <div className='footer_container'>
                <div className="git_linkedin_email">

                    <div className="email"><a target='_blank' href="mailto:sauravbharti38@gmail.com"><Lazyloader src={"https://chrischindev.com/assets/email.png"} /></a></div>
                    <div className="linked"><a target="_blank" href="https://www.linkedin.com/in/connect-saurav/"><Lazyloader src={"https://chrischindev.com/assets/linkedin.png"} /></a></div>
                    <div className="github"><a target="_blank" href="https://github.com/sau45"><Lazyloader src={"https://chrischindev.com/assets/github3.png"} /></a></div>
                </div>


                <div className="copywright">
                    © 2023 Saurav Bharti. All rights reserved.
                </div>
            </div>
       
    )
}

export default Footer
