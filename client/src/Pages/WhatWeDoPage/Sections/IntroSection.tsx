/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Styles
import "../WhatWeDoPage.scss";

//Interfaces
import { IntroSectionInterface } from "../WhatWeDoPageInterfaces";
import ImageContainer from "../../../Components/ImageContainers/ImageContainer";
import Tilt from "../../../Components/Tilt/Tilt";

//Component
const IntroSection : React.FC<IntroSectionInterface> = (props : IntroSectionInterface) => {
    //Properties
    const sectionClass : string | undefined = props.data.sectionClass;
    const sectionTitle : string | undefined = props.data.sectionTitle;
    const sectionCopy : string | undefined = props.data.sectionCopy;
    const sectionImage : string | undefined = props.data.sectionImage;
    const sectionImageAlt : string | undefined = props.data.sectionImageAlt;

    //Variables
    const SectionClass : string = sectionClass ? "IntroSection " + sectionClass : "IntroSection";

    return (
        <div className={SectionClass}>
            <div className="inner">
                <div className="topContainer">
                    <div className="inner">
                        <div className="backgroundImage">
                            <div className="inner">
                                <ImageContainer data={{ imageSource : sectionImage, imageAlt : sectionImageAlt }} />
                            </div>
                        </div>

                        <div className="titleContainer">
                            <div className="inner">
                                <Tilt data={{ maxRotation : 2, maxSkew : 2, backgroundColor : "#000000" }} />

                                <h1>{ sectionTitle }</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomContainer">
                    <div className="inner">
                        <p>{ sectionCopy }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default IntroSection;