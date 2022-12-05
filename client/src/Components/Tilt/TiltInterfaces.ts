/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Interfaces
export interface TiltInterface {
    data : {
        maxRotation : number,
        maxSkew : number,
        backgroundColor : string
    }
};
export interface TiltStyleInterface {
    backgroundColor : string,
    transform : string
};
export interface TiltValueInterface {
    rotation : number,
    skew : number
};
export interface GenerateTiltValuesParametersInterface {
    maxRotation : number,
    maxSkew : number
}