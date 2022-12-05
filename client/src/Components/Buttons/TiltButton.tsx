/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { Link, LinkProps } from "react-router-dom";

//Components
import ImageContainer from "../ImageContainers/ImageContainer";
import Tilt from "../Tilt/Tilt";

//Interfaces
import { TiltButtonInterface } from "./ButtonInterfaces";

//Styles
import "./Button.scss";

//Component
const TiltButton : React.FC<TiltButtonInterface> = (props : TiltButtonInterface) => {
    //Properties
    const buttonClass : string | undefined = props.data.buttonClass; 
    const buttonCopy : string | undefined = props.data.buttonCopy; 
    const buttonIcon : string | undefined = props.data.buttonIcon; 
    const buttonType : string | undefined = props.data.buttonType;
    const buttonHref : string | LinkProps["to"] = props.data.buttonHref || ""; 
    const buttonFunction : (() => void) | undefined = props.data.buttonFunction;
    const tiltMaxRotation : number | undefined = props.data.tiltMaxRotation || 4;
    const tiltMaxSkew : number | undefined = props.data.tiltMaxSkew || 4;
    const tiltBackgroundColor : string | undefined = props.data.tiltBackgroundColor || "";

    //Functions
    const generateTiltButton : () => JSX.Element = () => {
        const linkClass : string = buttonIcon ? "hasIcon" : "noIcon";

        if (buttonType === "internalLink") {
            return (
                <Link to={buttonHref} className={linkClass}>
                    {
                        buttonIcon ?
                            <ImageContainer data={{ imageSource: buttonIcon, imageAlt: "button Icon", imageHref: "" }} />
                            :
                            <></>
                    }

                    <span>{buttonCopy}</span>
                </Link>
            )

        } else if (buttonType === "externalLink") {
            return (
                <a href={buttonHref} className={linkClass} target="_blank" rel="noreferrer">
                    {
                        buttonIcon ?
                            <ImageContainer data={{ imageSource: buttonIcon, imageAlt: "button Icon", imageHref: "" }} />
                            :
                            <></>
                    }

                    <span>{buttonCopy}</span>
                </a>
            )

        } else if (buttonType === "function") {
            return (
                <p onClick={buttonFunction} className={linkClass}>
                    {
                        buttonIcon ?
                            <ImageContainer data={{ imageSource: buttonIcon, imageAlt: "button Icon", imageHref: "" }} />
                            :
                            <></>
                    }

                    <span>{buttonCopy}</span>
                </p>
            )

        } else {
            return (
                <p className={linkClass}>
                    {
                        buttonIcon ?
                            <ImageContainer data={{ imageSource: buttonIcon, imageAlt: "button Icon", imageHref: "" }} />
                            :
                            <></>
                    }

                    <span>{buttonCopy}</span>
                </p>
            )
        }
    }

    //Variables
    const TiltButtonClass : string = buttonClass ? "Button TiltButton " + buttonClass : "Button TiltButton";

    return (
        <div className={TiltButtonClass}>
            <div className="outer">
                <Tilt data={{ maxRotation : tiltMaxRotation, maxSkew : tiltMaxSkew, backgroundColor: tiltBackgroundColor }} />

                <div className="inner">
                    {generateTiltButton()}
                </div>
            </div>
        </div>
    );
};
export default TiltButton;