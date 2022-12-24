import React from "react";

//Images & Videos
import Waves from "../../sources/Waves.png";

//Styles
import "../../styles/style.css";

export default function SectionOne() {
    return (
        <div className="SectionOne">
            <img src={Waves} alt="Waves" />
            <div id="WelcomeLanding">
                <h1>Welcome</h1>
                <div id="p-container">
                    <p>This is the capstone website for Walrus ROV.</p>
                    <p>Feel free to stick around and see how our project progressed over the term.</p>
                </div>
                <a href="#" id="SeeMore">See More</a>
            </div>
        </div>
    )
};