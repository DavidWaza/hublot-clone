import React from 'react'
import '../watch.css';
import slide1 from '../img/slide1.png'
import slide2 from '../img/slide2.png'
import slide3 from '../img/slide3.png'
import slide4 from '../img/slide4.png'
import slide5 from '../img/slide5.png'

function watch() {
    return (
        <div className="bg-black w-full">
            <div className='text-white text-content p-12'>
                <h1 className="text-5xl">Explore watches</h1>
                <div className="flex flex-row h-96 justify-around">
                <img src={slide1} alt='pic-1' className="pictures"/>
                <img src={slide2} alt='pic-1' className="pictures"/>
                <img src={slide3} alt='pic-1' className="pictures"/>
                <img src={slide4} alt='pic-1' className="pictures"/>
                <img src={slide5} alt='pic-1' className="pictures"/>
                </div>
            </div>
        </div>
    )
}

export default watch
