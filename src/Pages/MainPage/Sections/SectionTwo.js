import React from "react";

// import ImageSlider from './ImageSlider'

//Styles
import "../../../Styles/style.css";

import placeHolder from '../../../sources/RovShell.png'

export default function SectionTwo() {
    
    // const slides = [
    //     { url: 'http://localhost:3000/image-1.png', title: 'Waves' },
    //     {url: 'http://localhost:3000/image-2.png', title: 'Walrus'}
    // ];

    return (
        <div className="SectionTwo">
            {/* <ImageSlider slides={slides}/> */}
            <div className="ImageContainer">
                <img src={placeHolder} alt="Walrus in gold"/>
            </div>
        </div>
    );
}