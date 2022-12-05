/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Components
import SingleColumnGrid from "../../../Components/Grids/SingleColumnGrid";
import AboutCard from "../../../Components/Cards/AboutCard";

//Styles
import "../WhatWeDoPage.scss";

//Interfaces
import { AboutSectionInterface } from "../WhatWeDoPageInterfaces";

//Component
const AboutSection : React.FC<AboutSectionInterface> = (props : AboutSectionInterface) => {
    //Properties

    //Variables

    return (
        <div className="AboutSection">
            <div className="inner">
                <SingleColumnGrid data={{}}>
                    <AboutCard data={{
                        cardTitle : "Brand",
                        cardCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        cardImage : "/images/whatWeDo_aboutSectionImage_1.png",
                        cardImageAlt : "About Brand",
                        cardLinkCopy : "Find out more.",
                        cardLinkType : "externalLink",
                        cardLinkHref : "#",
                        cardBackgroundColor : "#F0BEC9"
                    }} />

                    <AboutCard data={{
                        cardTitle : "Marketing",
                        cardCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        cardImage : "/images/whatWeDo_aboutSectionImage_2.png",
                        cardImageAlt : "About Marketing",
                        cardLinkCopy : "Find out more.",
                        cardLinkType : "externalLink",
                        cardLinkHref : "#",
                        cardBackgroundColor : "#F27250"
                    }} />

                    <AboutCard data={{
                        cardTitle : "Technology",
                        cardCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        cardImage : "/images/whatWeDo_aboutSectionImage_3.png",
                        cardImageAlt : "About Technology",
                        cardLinkCopy : "Find out more.",
                        cardLinkType : "externalLink",
                        cardLinkHref : "#",
                        cardBackgroundColor : "#84A9B5"
                    }} />
                </SingleColumnGrid>
            </div>
        </div>
    );
};
export default AboutSection;