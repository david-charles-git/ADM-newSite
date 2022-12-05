/*
	Project : AddMustard
	Author(s) : David Charles
*/

//Dependencies
import React from 'react';
import { Route, Routes } from "react-router-dom";

//Components
import HomePage from "../Pages/HomePage/HomePage";
import WhatWeDoPage from "../Pages/WhatWeDoPage/WhatWeDoPage";
import WhoWeArePage from '../Pages/WhoWeArePage/WhoWeArePage';
import HowCanWeHelpPage from "../Pages/HowCanWeHelpPage/HowCanWeHelpPage";

//Component
const RouterHandler : React.FC = () => {
	return (
        <Routes>
            <Route path="/" element={
                <HomePage data={{}} />
            } />

            <Route path="/what-we-do/" element={
                <WhatWeDoPage data={{}} />
            } />

            <Route path="/who-we-are/" element={
                <WhoWeArePage data={{}} />
            } />

            <Route path="/how-can-we-help/" element={
                <HowCanWeHelpPage data={{}} />
            } />
        </Routes>
	);
};
export default RouterHandler;