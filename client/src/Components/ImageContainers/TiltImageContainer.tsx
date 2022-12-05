/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { Link, LinkProps } from "react-router-dom";

//Components
import Tilt from "../Tilt/Tilt";

//Styles
import "./ImageContainer.scss";

//Interfaces
import { TiltImageContainerInterface } from "./ImageContainerInterfaces";

//Component
const ImageContainer : React.FC<TiltImageContainerInterface> = (props : TiltImageContainerInterface) => {
    //Properties
    const imageSource : string = props.data.imageSource;
    const imageAlt : string | undefined = props.data.imageAlt;
    const imageHrefType : string | undefined = props.data.imageHrefType;
    const imageHref : string | LinkProps["to"] = props.data.imageHref || "";

    //Functions
    const generateImage : () => JSX.Element = () => {
        if (imageHref) {
            if (imageHrefType === "internalLink") {
                return (
                    <Link to={imageHref}>
                        <img src={imageSource} alt={imageAlt} />
                    </Link>
                )

            } else if (imageHrefType === "externalLink") {
                return (
                    <a href={imageHref}>
                        <img src={imageSource} alt={imageAlt} />
                    </a>
                )
            }
        }

        return (
            <img src={imageSource} alt={imageAlt} />
        )
    }

    return (
        <div className="ImageContainer">
            <div className="inner">
                <Tilt data={{ maxRotation : 2, maxSkew : 2, backgroundColor : "#000"}} />

                {generateImage()}
            </div>
        </div>
    );
};
export default ImageContainer;