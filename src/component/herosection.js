import React from 'react'
import './herosection.css'
import './nav.css'
import BigImage from '../img/hero-image.png'
function herosection() {
    return (
        <div className="hero-section relative">
            <img src={BigImage} alt="Big-picture"  />
            <div className=" absolute top-96 p-10">
            <h3 className="text-white text-content py-3">BIG BANG</h3>
            <h1 className="text-content text-white text-6xl">unico <br />titanium blue <br /> ceramic </h1>
            <a href="#"><p className="text-white text-content py-4 hover-underline-animation1">Learn More</p></a>
            </div>
        </div>
    )
}

export default herosection
