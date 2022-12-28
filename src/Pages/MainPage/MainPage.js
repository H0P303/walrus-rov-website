import React from "react";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import Footer from "../../components/footer/Footer";

import "../../Styles/style.css";

export default function MainPage() {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <Footer />
        </div>
    );
}