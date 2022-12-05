/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
// import React from "react";

//Interfaces
export interface ImageContainerInterface {
    data : {
        imageSource : any,
        imageAlt? : string,
        imageHrefType? : string,
        imageHref? : string
    }
};
export interface TiltImageContainerInterface {
    data : {
        imageSource : any,
        imageAlt? : string,
        imageHrefType? : string,
        imageHref? : string
    }
};
export interface TiltImageStyleInterface {
    transform : string
}
