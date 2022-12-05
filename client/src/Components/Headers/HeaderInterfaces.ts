/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface HeaderInterface {
    data? : {

    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};

export interface HeaderNavigationStyleInterface {
    gridTemplateColumns : string
};