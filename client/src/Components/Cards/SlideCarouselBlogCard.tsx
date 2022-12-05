/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { Link, LinkProps } from "react-router-dom";

//Componenets
import ImageContainer from "../ImageContainers/ImageContainer";
import Tilt from "../Tilt/Tilt";

//Styles
import "./Cards.scss";

//Interfaces
import { SlideCarouselBlogCardInterface } from "./CardInterfaces"; 

//Component
const SlideCarouselBlogCard : React.FC<SlideCarouselBlogCardInterface> = (props : SlideCarouselBlogCardInterface) => {
    //Properties
    const cardClass : string | undefined = props.data.cardClass; 
    const cardLogoImage : string | undefined = props.data.cardLogoImage;
    const cardImage : string | undefined = props.data.cardImage;
    const cardImageAlt : string | undefined = props.data.cardImageAlt;
    const cardLinkType : string | undefined = props.data.cardLinkType;
    const cardLinkHref : string | LinkProps["to"] = props.data.cardLinkHref || "";
    const cardBackgroundColor : string | undefined = props.data.cardBackgroundColor || "";

    //Fucntions
    const generateBlogCardContent : () => JSX.Element = () => {
        return (
            <>
                <div className="contentContainer">
                    <div className="imageParent">
                        {
                            cardLogoImage ?
                                <div className="logoContainer">
                                    <ImageContainer data={{ imageSource: cardLogoImage }} />
                                </div>
                                :
                                <></>
                        }

                        {
                            cardImage ?
                                <ImageContainer data={{ imageSource: cardImage, imageAlt: cardImageAlt, imageHrefType : "externalLink", imageHref: "" }} />
                                :
                                <></>
                        }
                    </div>

                    <div className="inner">
                        <Tilt data={{ maxRotation : 1, maxSkew : 2, backgroundColor : cardBackgroundColor }} />
                        
                        { props.children }
                    </div>
                </div>
            </>
        )
    };
    const generateBlogCardInterior : () => JSX.Element = () => {
        if (cardLinkHref) {
            if (cardLinkType === "internalLink") {
                return (
                    <Link className={innerClassName} to={cardLinkHref}>
                        { generateBlogCardContent() }
                    </Link>
                )

            } else if (cardLinkType === "externalLink") {
                return (
                    <a className={innerClassName} href={cardLinkHref} rel="noreferrer" target="_blank">
                        { generateBlogCardContent() }
                    </a>
                )

            }
        }
        
        return (
            <div className={innerClassName}>
                { generateBlogCardContent() }
            </div>
        )
    };

    //Variables
    const SlideCarouselBlogCardClass : string = cardClass ? "SlideCarouselBlogCard " + cardClass : "SlideCarouselBlogCard";
    const innerClassName : string = cardImage ? "inner withImage" : "inner";

    return (
        <div className={SlideCarouselBlogCardClass}>
            { generateBlogCardInterior () }
        </div>
    );
};

export default SlideCarouselBlogCard;