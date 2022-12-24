import React from "react";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";

import "../../Styles/style.css";

export default function MainPage() {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
        </div>
    );
}