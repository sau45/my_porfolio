import React from 'react'
import './learntech.css'
import techworkdata from './learntechobject.json'
import Lazyloader from '../lazyloading/Lazyloader'
function LearnTech() {
  return (
  

      <div className='learntech_container'>
        <h1>Technologies I've Workde With</h1>
        <div className="all_content">

          {techworkdata?.map((item, index) => (
            <div className="sub_learntech_container" key={index}>
              <div className="tool_img_container" key={index}>
                <div className="development_role" key={index}>{item?.tech_name}</div>
                <div className="all_image">

                  {item?.tech_img?.map((url) => {
                    return (
                      <div className="tech_img" key={index}>
                        <Lazyloader title={url?.title} src={url?.img} />
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
  
  )
}

export default LearnTech
