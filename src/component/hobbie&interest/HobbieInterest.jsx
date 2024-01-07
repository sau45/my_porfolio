import React from 'react'
import Lazyloader from '../lazyloading/Lazyloader'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import './hobbyinterest.css'

function HobbieInterest() {
    const imageurldata = [
        {

            img: "https://chrischindev.com/assets/hobbies/game.png",
        },
        {

            img: "https://chrischindev.com/assets/hobbies/travel.png",
        },
        {

            img: "https://chrischindev.com/assets/hobbies/swim.png",
        },
        {

            img: "	https://chrischindev.com/assets/hobbies/jog.png",
        },
        {

            img: "https://chrischindev.com/assets/hobbies/tv.png",
        },
        {

            img: "https://chrischindev.com/assets/hobbies/hp.png",
        }, {

            img: "https://chrischindev.com/assets/hobbies/noodles.png",
        }, {

            img: "https://chrischindev.com/assets/hobbies/sushi.png",
        },

    ]
    return (
        <ContentWrapper>

        <div className='hobbies_interest_container'>
            <h1>Hobbies & Interests</h1>
            <div className="sub_hobby_interest_container">
                <div className="hobbies_interest_img">
                    {imageurldata?.map((url) => (
                        <div className="individual_hobby_interest_img">

                            <Lazyloader src={url?.img} />
                        </div>
                    ))}

                </div>
                <div className="hobbies_interest_text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam tempora illum eaque alias quis, aliquam, numquam cum deleniti pariatur, rem fugit aperiam temporibus adipisci in. Dolores fugit doloribus odio!</p>
                </div>

            </div>

        </div>
                    </ContentWrapper>
    )
}

export default HobbieInterest
