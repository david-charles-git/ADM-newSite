/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface WhatWeDoPageInterface {
    data? : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface IntroSectionInterface {
    data : {
        sectionClass? : string,
        sectionTitle? : string,
        sectionCopy? : string,
        sectionImage? : string,
        sectionImageAlt? : string,
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface AboutSectionInterface {
    data? : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface OurWorkSectionInterface {
    data? : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};