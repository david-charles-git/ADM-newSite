/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface FooterInterface {
    data? : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};

export interface FooterNavigationStyleInterface {
    gridTemplateColumns? : string
};