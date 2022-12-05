/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { generateRandomNumber } from "../../Utilities/helpers";

//Interfaces
import { TiltInterface,TiltStyleInterface, TiltValueInterface, GenerateTiltValuesParametersInterface } from "./TiltInterfaces";

//Styles
import "./Tilt.scss";

//Component
const Tilt : React.FC<TiltInterface> = (props : TiltInterface) => {
    //Properties
    const maxRotation : number = props.data.maxRotation;
    const maxSkew : number = props.data.maxSkew;
    const backgroundColor : string = props.data.backgroundColor;

    //Functions
    const generateTiltValues : (props : GenerateTiltValuesParametersInterface) => TiltValueInterface = (props) => {
        /*
            Creates a random value between -maxTiltVale and +maxTiltValue
            Take random Number between -maxTiltVale and +maxTiltVale
            Multiply the Number by -1 to the power of 1 or 2 (generated randomly)
        */
        const rotation : number = generateRandomNumber((-1) * props.maxRotation, props.maxRotation) * Math.pow(-1, generateRandomNumber(1, 2));
        const skew : number = generateRandomNumber((-1) * props.maxSkew, props.maxSkew) * Math.pow(-1, generateRandomNumber(1, 2));
    
        const tiltValues : TiltValueInterface = {
            rotation : rotation,
            skew : skew
        };
    
        return tiltValues;
    };

    //Variables
    const tiltValueProps : GenerateTiltValuesParametersInterface = {
        maxRotation : maxRotation,
        maxSkew : maxSkew
    };
    const tiltValues : TiltValueInterface = generateTiltValues(tiltValueProps);
    const tiltStyle : TiltStyleInterface = {
        backgroundColor : backgroundColor,
        transform : "rotate(" + tiltValues.rotation + "deg) skewX(" + tiltValues.skew + "deg)"
    };

    return (
        <div className="tiltContainer">
            <div className="tilt">
                <div className="inner" style={tiltStyle} />
            </div>
        </div>
    );
};
export default Tilt;