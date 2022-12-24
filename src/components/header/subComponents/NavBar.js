import React from "react";

//Images & Video
import Image from "../../../sources/Walrus-Gold.png"

//Styles
import "../../../styles/style.css"

export default function NavBar(){
    return (
        <div>
            <div className="logo-title-cont">
                <img src={Image} alt="Walrus"/>
                <h1 id="Title">WALRUS ROV</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Timeline</li>
                <li>Code</li>
                <li>Team</li>
            </ul>
        </div>
        
    )
}