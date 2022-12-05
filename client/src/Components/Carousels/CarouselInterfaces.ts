/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface StackCarouselInterface {
    data : {
        carouselClass? : string,
        carouselHasArrows? : boolean,
        carouselHasDots? : boolean,
        carouselViewAllCopy? : string,
        carouselViewAllType? :string,
        carouselViewAllHref? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface TabbedCarouselInterface {
    data : {
        carouselClass? : string,
        carouselViewAllCopy? : string,
        carouselViewAllType? :string,
        carouselViewAllHref? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface SlideCarouselInterface {
    data : {
        carouselClass? : string,
        carouselHasArrows? : boolean,
        carouselHasDots? : boolean,
        carouselViewAllCopy? : string,
        carouselViewAllType? :string,
        carouselViewAllHref? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};