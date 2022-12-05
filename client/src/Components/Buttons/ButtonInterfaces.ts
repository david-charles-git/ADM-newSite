/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface ButtonInterface {
    data : {
        buttonClass? : string,
        buttonCopy? : string,
        buttonIcon? : string,
        buttonType? : string,
        buttonHref? : string,
        buttonFunction? : () => void
    }
};
export interface TiltButtonInterface {
    data : {
        buttonClass? : string,
        buttonCopy? : string,
        buttonIcon? : string,
        buttonType? : string,
        buttonHref? : string,
        buttonFunction? : () => void,
        tiltMaxRotation? : number,
        tiltMaxSkew? : number,
        tiltBackgroundColor? : string
    }
};
export interface TiltButtonStyleInterface {
    backgroundColor? : string,
    transform? : string
};
export interface ToTopButtonInterface {
    data : {
        minBottomValue : number,
        maxBottomValue : number,
    }
};