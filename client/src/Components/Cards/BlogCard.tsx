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
import { BlogCardInterface } from "./CardInterfaces"; 

//Component
const BlogCard : React.FC<BlogCardInterface> = (props : BlogCardInterface) => {
    //Properties
    const cardClass : string | undefined = props.data.cardClass; 
    const cardTitle : string | undefined = props.data.cardTitle;
    const cardCopy : string | undefined = props.data.cardCopy;
    const cardImage : string | undefined = props.data.cardImage;
    const cardImageAlt : string | undefined = props.data.cardImageAlt;
    const cardTags : Array<string> = props.data.cardTags || [];
    const cardLinkCopy : string | undefined = props.data.cardLinkCopy;
    const cardLinkType : string | undefined = props.data.cardLinkType;
    const cardLinkHref : string | LinkProps["to"] = props.data.cardLinkHref || "";
    const cardBackgroundColor : string | undefined = props.data.cardBackgroundColor || "";

    //Fucntions
    const getTagHref : (tag : string) => string = (tag) => {
        const tagBaseHref : string = "";
        var tagHref : string = tagBaseHref + tag + "/";

        return tagHref;
    };
    const getTagBackgroundColor : (tag : string) => string = (tag) => {
        var tagbackgroundColor : string = "";

        if (tag === "Brand") {
            tagbackgroundColor = "#F0BEC9";

        } else if (tag === "Marketing") {
            tagbackgroundColor = "#F27250";

        } else if (tag === "Technology") {
            tagbackgroundColor = "#84A9B5";

        }
        
        return tagbackgroundColor;
    };
    const generateBlogCardContent : () => JSX.Element = () => {
        return (
            <>
                <div className="contentContainer">
                    <Tilt data={{ maxRotation : 1, maxSkew : 2, backgroundColor : cardBackgroundColor }} />

                    <div className="inner">
                        { cardTitle ? <h3>{cardTitle}</h3> : <></> }

                        { cardCopy ? <p>{cardCopy}</p> : <></> }
                            
                        {
                            cardTags.length > 0 ?
                                <div className="tagContainer">
                                    <div className="inner">
                                        {
                                            cardTags.map((tag : string, key : number) => {
                                                return (
                                                    <div key={key} className="tag">
                                                        <div className="inner">
                                                            <TiltButton data={{
                                                                 buttonCopy : tag,
                                                                 buttonType : "InternalLink",
                                                                 buttonHref : getTagHref(tag),
                                                                 tiltBackgroundColor : getTagBackgroundColor(tag)
                                                            }} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </div>

                {
                    cardImage ?
                        <ImageContainer data={{ imageSource: cardImage, imageAlt: cardImageAlt, imageHrefType : "External Link", imageHref: "" }} />
                        :
                        <></>
                }

                <TiltButton data={{
                    buttonClass : "",
                    buttonCopy : cardLinkCopy,
                    buttonIcon : "",
                    buttonType : cardLinkType,
                    buttonHref : cardLinkHref,
                    buttonFunction : () => {},
                    tiltBackgroundColor : "#FFF"
                }} />
            </>
        )
    };
    const generateBlogCardInterior : () => JSX.Element = () => {
        if (cardLinkHref) {
            if (cardLinkType === "Internal Link") {
                return (
                    <Link className={innerClassName} to={cardLinkHref}>
                        { generateBlogCardContent() }
                    </Link>
                )

            } else if (cardLinkType === "External Link") {
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
    const BlogCardClass : string = cardClass ? "BlogCard " + cardClass : "BlogCard";
    const innerClassName : string = cardImage ? "inner withImage" : "inner";

    return (
        <div className={BlogCardClass}>
            { generateBlogCardInterior () }
        </div>
    );
};

export default BlogCard;