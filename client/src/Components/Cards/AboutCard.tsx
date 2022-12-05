/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { Link, LinkProps } from "react-router-dom";

//Componenets
import TiltButton from "../Buttons/TiltButton";
import ImageContainer from "../ImageContainers/ImageContainer";
import Tilt from "../Tilt/Tilt";

//Styles
import "./Cards.scss";

//Interfaces
import { AboutCardInterface } from "./CardInterfaces"; 
import Button from "../Buttons/Button";

//Component
const AboutCard : React.FC<AboutCardInterface> = (props : AboutCardInterface) => {
    //Properties
    const cardClass : string | undefined = props.data.cardClass; 
    const cardTitle : string | undefined = props.data.cardTitle;
    const cardCopy : string | undefined = props.data.cardCopy;
    const cardImage : string | undefined = props.data.cardImage;
    const cardImageAlt : string | undefined = props.data.cardImageAlt;
    const cardLinkCopy : string | undefined = props.data.cardLinkCopy;
    const cardLinkType : string | undefined = props.data.cardLinkType;
    const cardLinkHref : string | LinkProps["to"] = props.data.cardLinkHref || "";
    const cardBackgroundColor : string | undefined = props.data.cardBackgroundColor || "";

    //Fucntions
    const generateBlogCardContent : () => JSX.Element = () => {
        return (
            <>
                <div className="imageParent">
                    <div className="inner">
                        <ImageContainer data={{ imageSource : cardImage, imageAlt : cardImageAlt }} />
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="inner">
                        <Tilt data={{ maxRotation : 2, maxSkew : 2, backgroundColor : "#ffffff" }} />

                        { 
                            cardTitle ?
                                <div className="title">
                                    <div className="inner">
                                        <Tilt data={{ maxRotation: 2, maxSkew: 2, backgroundColor : "#000000" }} />

                                        <h2>{cardTitle}</h2>
                                    </div>
                                </div>
                                :
                                <></>
                        }

                        {
                            cardCopy ?
                                <div className="copy">
                                    <div className="inner">
                                        <p>{cardCopy}</p>

                                        {
                                            cardLinkCopy ?
                                                <Button data={{
                                                    buttonCopy : cardLinkCopy,
                                                    buttonType : cardLinkType,
                                                    buttonHref : cardLinkHref
                                                }} />
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </div>
            </>
        )
    };

    //Variables
    const AboutCardClass : string = cardClass ? "AboutCard " + cardClass : "AboutCard";

    return (
        <div className={AboutCardClass} style={{ backgroundColor : cardBackgroundColor }}>
            <div className="inner">
                { generateBlogCardContent() }
            </div>
        </div>
    );
};

export default AboutCard;