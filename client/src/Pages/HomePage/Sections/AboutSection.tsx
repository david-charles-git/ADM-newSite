/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Components
import AboutCard from "../../../Components/Cards/AboutCard";
import TabbedCarousel from "../../../Components/Carousels/TabbedCarousel";

//Interfaces
import { AboutSectionInterface } from "../HomePageInterfaces";


//Component
const AboutSection : React.FC<AboutSectionInterface> = (props : AboutSectionInterface) => {
    return (
        <section className="AboutSection">
            <div className="inner"> 
                <TabbedCarousel data={{}}>
                    <AboutCard data={{
                        cardTitle : "Brand",
                        cardCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        cardImage : "/images/aboutBrand.png",
                        cardImageAlt : "About Brand",
                        cardLinkCopy : "Find out more.",
                        cardLinkType : "externalLink",
                        cardLinkHref : "#",
                        cardBackgroundColor : "#F0BEC9"
                    }} />

                    <AboutCard data={{
                        cardTitle : "Marketing",
                        cardCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        cardImage : "/images/aboutMarketing.png",
                        cardImageAlt : "About Marketing",
                        cardLinkCopy : "Find out more.",
                        cardLinkType : "externalLink",
                        cardLinkHref : "#",
                        cardBackgroundColor : "#F27250"
                    }} />

                    <AboutCard data={{
                        cardTitle : "Technology",
                        cardCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        cardImage : "/images/aboutTechnology.png",
                        cardImageAlt : "About Technology",
                        cardLinkCopy : "Find out more.",
                        cardLinkType : "externalLink",
                        cardLinkHref : "#",
                        cardBackgroundColor : "#84A9B5"
                    }} />
                </TabbedCarousel>
            </div>
        </section>
    );
};
export default AboutSection;