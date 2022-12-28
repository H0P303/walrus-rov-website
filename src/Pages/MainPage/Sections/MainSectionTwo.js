//Styles
import "../../../Styles/Style.scss";

//Images
import placeHolder from '../../../sources/RovShell.png'

export default function SectionTwo() {
    return (
        <div className="MainSectionTwo">
            {/* <ImageSlider slides={slides}/> */}
            <div className="ImageContainer">
                <img src={placeHolder} alt="Walrus in gold"/>
            </div>
        </div>
    );
}