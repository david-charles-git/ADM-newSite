/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Components
import ImageContainer from "../ImageContainers/ImageContainer";
import Tilt from "../Tilt/Tilt";

//Interfaces
import { TestimonialCardInterface } from "./CardInterfaces";

//Images
const quotationMarkLeft : string =  require("../../Images/quotationOpen.svg").default;
const quotationMarkRight : string =  require("../../Images/quotationClose.svg").default;

//Component
const TestimonialCard : React.FC<TestimonialCardInterface> = (props : TestimonialCardInterface) => {
    //Properties
    const cardClass : string | undefined = props.data.cardClass;
    const cardTitle : string | undefined = props.data.cardTitle;
    const cardCopy : string | undefined = props.data.cardCopy;
    const cardAuthor : string | undefined = props.data.cardAuthor;
    const cardBackgroundColor : string | undefined = props.data.cardBackgroundColor || "";

    //Variables
    const TestimonialCardClass : string = cardClass ? "TestimonialCard " + cardClass : "TestimonialCard";

    return (
        <div className={TestimonialCardClass}>
            <div className="inner"> 
                <Tilt data={{ maxRotation : 2, maxSkew : 2, backgroundColor : cardBackgroundColor }} />

                <div className="backgroundContainer">
                    <div className="inner">
                        <ImageContainer data={{ imageSource : quotationMarkLeft }} />
                        
                        <ImageContainer data={{ imageSource : quotationMarkRight }} />
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="inner">
                        { cardTitle ? <h3>{cardTitle}</h3> : <></>}

                        {cardCopy ? <p>{cardCopy}</p> : <></>}
                    </div>
                </div>

                <div className="cardAuthorContainer">
                    <div className="inner">
                        <Tilt data={{ maxRotation : 2, maxSkew : 3, backgroundColor: "#ffffff" }} />

                        <p>{cardAuthor}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TestimonialCard;