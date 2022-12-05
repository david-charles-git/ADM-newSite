/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Styles
import "./WhoWeArePage.scss";

//Interfaces
import { WhoWeArePageInterface } from "./WhoWeArePageInterfaces";

//Component
const WhoWeArePage : React.FC<WhoWeArePageInterface> = (props : WhoWeArePageInterface) => {
    return (
        <div className="WhoWeArePage">
            <div className="inner">
            </div>
        </div>
    );
};
export default WhoWeArePage;