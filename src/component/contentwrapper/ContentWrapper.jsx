import React from 'react'
import './contentwrapper.css'
function ContentWrapper({ children }) {
    return (
        <div className='content_wrapper'>
            {children}

        </div>
    )
}

export default ContentWrapper
