/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Styles
import "./HowCanWeHelpPage.scss";

//Interfaces
import { HowCanWeHelpPageInterface } from "./HowCanWeHelpInterfaces";

//Component
const HowCanWeHelpPage : React.FC<HowCanWeHelpPageInterface> = (props : HowCanWeHelpPageInterface) => {
    return (
        <div className="HowCanWeHelpPage">
            <div className="inner">
            </div>
        </div>
    );
};
export default HowCanWeHelpPage;