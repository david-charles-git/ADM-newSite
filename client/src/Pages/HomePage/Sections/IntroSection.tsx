/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Components

//Interfaces
import { IntroSectionInterface } from "../HomePageInterfaces";


//Component
const IntroSection : React.FC<IntroSectionInterface> = (props : IntroSectionInterface) => {
    return (
        <section className="IntroSection">
            <div className="inner">
                { props.children }
            </div>
        </section>
    );
};
export default IntroSection;