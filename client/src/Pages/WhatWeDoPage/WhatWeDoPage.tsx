/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Components
import IntroSection from "./Sections/IntroSection";
import AboutSection from "./Sections/AboutSection";
import OurWorkSection from "./Sections/OurWorkSection";

//Styles
import "./WhatWeDoPage.scss";

//Interfaces
import { WhatWeDoPageInterface } from "./WhatWeDoPageInterfaces";

//Component
const WhatWeDoPage : React.FC<WhatWeDoPageInterface> = (props : WhatWeDoPageInterface) => {
    return (
        <div className="WhatWeDoPage">
            <div className="inner">
                <IntroSection data={{
                    sectionImage : "../images/whatWeDoPage_introSectionImage_1.png",
                    sectionTitle : "What we do",
                    sectionCopy : "addmustard supports entrepreneurs with world-class creative, marketing & technology expertise.(From research, creative, through marketing, data and customer technology delivery, we help entrepreneurs join up their brand, marketing & technology)"
                }} />

                <AboutSection data={{}} />

                <OurWorkSection data={{}} />
            </div>
        </div>
    );
};
export default WhatWeDoPage;