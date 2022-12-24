import React from "react";

//Images & Video
import Image from "../../../sources/Walrus-Gold.png"

//Styles
import "../../../Styles/style.css"

export default function NavBar(){
    return (
        <div>
            <div className="logo-title-cont">
                <a href="/">
                    <img src={Image} alt="Walrus"/>
                    <h1 id="Title">WALRUS ROV</h1>
                </a>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="TimeLine">TimeLine</a></li>
                <li><a href="Code">Code</a></li>
                <li><a href="Team">Team</a></li>
            </ul>
        </div>
        
    )
}