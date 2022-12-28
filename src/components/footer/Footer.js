import "../../Styles/style.css"

import CamosunLogo from '../../sources/Camosun-Corporate-Logo-White.png'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Container">
                <div id="left">
                    <img src={CamosunLogo} alt="camosun corporate logo" />
                    <p>©2022 by Walrus ROV @Jason King</p>
                </div>
                <div id="right">
                    <p>Walrus ROV would like to thank Camosun College for its support, Camosun Innovates for supplying us with the ROV and additional supplies, as well as the multiple instructors that have been valuable throughout the term.</p>
                </div>
            </div>
        </div>
    )
};