/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React, { Children } from "react";

//Components
import Button from "../Buttons/Button";
import ToTopButton from "../Buttons/ToTopButton";
import ImageContainer from "../ImageContainers/ImageContainer";

//Styles
import "./Footer.scss";

//Interfaces
import { FooterInterface, FooterNavigationStyleInterface } from "./FooterInterfaces";

//Images
const googlePartnerLogo : string = require("../../Images/googlePartner_logo.svg").default;
const bingPartnerLogo : string = require("../../Images/bingPartner_logo.svg").default;

//Component
const Footer : React.FC<FooterInterface> = (props : FooterInterface) => {
    //Properties
    const childrenCount : number = Children.toArray(props.children).length;

    //Variables
    const navigationStyle : FooterNavigationStyleInterface = {
        gridTemplateColumns: "repeat(" + childrenCount + ", 1fr)"

    };

    return (
        <footer className="Footer">
            <div className="inner">
                <div className="upper">
                    <div className="inner">
                        <nav>
                            <div className="inner" style={navigationStyle}>
                                {props.children}
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="lower">
                    <div className="inner">
                        <div className="left">
                            <div className="inner">
                                <ImageContainer data={{ imageSource: googlePartnerLogo, imageAlt: "Google Partner Logo", imageHrefType : "externalLink", imageHref: "#" }} />

                                <ImageContainer data={{ imageSource: bingPartnerLogo, imageAlt: "Bing Partner Logo", imageHrefType : "externalLink", imageHref: "#" }} />
                            </div>
                        </div>

                        <div className="right">
                            <div className="inner">
                                <nav>
                                    <div className="inner">
                                        <Button data={{
                                            buttonClass: "baseNav",
                                            buttonCopy: "How can we help?",
                                            buttonIcon: "",
                                            buttonType: "internalLink",
                                            buttonHref: "/how-can-we-help/",
                                            buttonFunction: () => { }
                                        }} />

                                        <Button data={{
                                            buttonClass: "baseNav",
                                            buttonCopy: "LinkedIn",
                                            buttonIcon: "",
                                            buttonType: "externalLink",
                                            buttonHref: "#",
                                            buttonFunction: () => { }
                                        }} />

                                        <Button data={{
                                            buttonClass: "baseNav",
                                            buttonCopy: "GlassDoor",
                                            buttonIcon: "",
                                            buttonType: "externalLink",
                                            buttonHref: "#",
                                            buttonFunction: () => { }
                                        }} />
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <ToTopButton data={{ minBottomValue : 30, maxBottomValue : 150 }} />
            </div>
        </footer>
    );
};
export default Footer;