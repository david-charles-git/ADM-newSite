/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface BlogCardInterface {
    data : {
        cardClass? : string,
        cardTitle? : string,
        cardCopy? : string,
        cardImage? : string,
        cardImageAlt? : string,
        cardTags? : Array<string>,
        cardLinkCopy? : string,
        cardLinkType? : string,
        cardLinkHref? : string,
        cardBackgroundColor? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface TestimonialCardInterface {
    data : {
        cardClass? : string,
        cardTitle? : string,
        cardCopy? : string,
        cardAuthor? : string,
        cardBackgroundColor? : string
    }
};
export interface AboutCardInterface {
    data : {
        cardClass? : string,
        cardTitle? : string,
        cardCopy? : string,
        cardImage? : string,
        cardImageAlt? : string,
        cardLinkCopy? : string,
        cardLinkType? : string,
        cardLinkHref? : string,
        cardBackgroundColor? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface SlideCarouselBlogCardInterface {
    data : {
        cardClass? : string,
        cardLogoImage? : string
        cardImage? : string,
        cardImageAlt? : string,
        cardLinkType? : string,
        cardLinkHref? : string,
        cardBackgroundColor? : string,
        cardContent? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};