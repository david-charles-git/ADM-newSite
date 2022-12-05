/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface GridInterface {
    data : {
        gridClass? : string,
        gridLoadCount? : number,
        gridPagination? : string,
        gridPaginationCopy? : string,
        gridPaginationLinkHref? : string,
        gridPaginationLinkType? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};
export interface SingleColumnGridInterface {
    data : {
        gridClass? : string,
        gridLoadCount? : number,
        gridPagination? : string,
        gridPaginationCopy? : string,
        gridPaginationLinkHref? : string,
        gridPaginationLinkType? : string
    },
    children? : Array<React.ReactNode> | React.ReactNode | Array<JSX.Element> | JSX.Element
};