/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { SlideCarouselBlogCardInterface } from "../../Components/Cards/CardInterfaces";
import { SlideCarouselInterface } from "../../Components/Carousels/CarouselInterfaces";

//Interfaces
export interface HomePageInterface {
    data : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface BlogSectionInterface {
    data? : {

    }
};
export interface TestimonialSectionInterface {
    data? : {
        
    },    
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface AboutSectionInterface {
    data? : {
        
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface OurWorkSectionInterface {
    data : {
        title? : string,
        carouselData : SlideCarouselInterface,
        carouselItems? : Array<SlideCarouselBlogCardInterface>
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface IntroSectionInterface {
    data? : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
}