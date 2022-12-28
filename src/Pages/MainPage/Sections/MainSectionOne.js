//Images & Videos
import Waves from "../../../sources/Waves.png";

//Styles
import "../../../Styles/Style.scss";

export default function MainSectionOne() {
    return (
        <div className="MainSectionOne">
            <img src={Waves} alt="Waves" />
            <div id="WelcomeLanding">
                <h1>Welcome</h1>
                <div id="p-container">
                    <p>This is the capstone website for Walrus ROV.</p>
                    <p>Feel free to stick around and see how our project progressed over the term.</p>
                </div>
                <a href="About" id="SeeMore">See More</a>
            </div>
        </div>
    )
};