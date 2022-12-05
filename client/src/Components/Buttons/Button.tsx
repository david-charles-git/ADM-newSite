/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { Link, LinkProps } from "react-router-dom";

//Components
import ImageContainer from "../ImageContainers/ImageContainer";

//Interfaces
import { ButtonInterface } from "./ButtonInterfaces";

//Styles
import "./Button.scss";

//Component
const Button : React.FC<ButtonInterface> = (props : ButtonInterface) => {
    //Properties
    const buttonClass : string | undefined = props.data.buttonClass; 
    const buttonCopy : string | undefined = props.data.buttonCopy; 
    const buttonIcon : string | undefined = props.data.buttonIcon; 
    const buttonType : string | undefined = props.data.buttonType;
    const buttonHref : string | LinkProps["to"] = props.data.buttonHref || ""; 
    const buttonFunction : (() => void) | undefined = props.data.buttonFunction;

    //Functions
    const generateButtonContent : () => JSX.Element = () => {
        return (
            <>
                {
                    buttonIcon ?
                        <ImageContainer data={{ imageSource: buttonIcon, imageAlt: "button Icon", imageHref: "" }} />
                        :
                        <></>
                }

                <span>{buttonCopy}</span>
            </>
        )
    };
    const generateButton : () => JSX.Element = () => {
        const linkClass : string = buttonIcon ? "hasIcon" : "noIcon";

        if (buttonType === "internalLink") {
            return (
                <Link to={buttonHref} className={linkClass}>
                    { generateButtonContent() }
                </Link>
            )

        } else if (buttonType === "externalLink") {
            return (
                <a href={buttonHref} className={linkClass} target="_blank" rel="noreferrer">
                    { generateButtonContent() }
                </a>
            )

        } else if (buttonType === "function") {
            return (
                <p onClick={buttonFunction} className={linkClass}>
                    { generateButtonContent() }
                </p>
            )

        }
        
        return (
            <p className={linkClass}>
                { generateButtonContent() }
            </p>
        )
    }

    //Variables
    const ButtonClass : string = buttonClass ? "Button " + buttonClass : "Button";

    return (
        <div className={ButtonClass}>
            <div className="outer">
                <div className="inner">
                    {generateButton()}
                </div>
            </div>
        </div>
    );
};
export default Button;