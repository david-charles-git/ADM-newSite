/*
	Project : AddMustard
	Author(s) : David Charles
*/

//Dependencies
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Header from "./Components/Headers/Header";
import TiltButton from './Components/Buttons/TiltButton';
import Footer from "./Components/Footers/Footer";
import RouterHandler from './Utilities/RouteHandler';
import Test from './test';

//Styles
import './App.scss';

//Interfaces
import { AppInterface } from './AppInterfaces';

//Images
const whatsAppIcon : string = require("./Images/whatsApp_icon.svg").default;
const phoneIcon : string = require("./Images/phone_icon.svg").default;
const emailIcon : string = require("./Images/email_icon.svg").default;

//Component
const App : React.FC<AppInterface> = (props : AppInterface) => {
	return (
		<div className="App">
			<Router>
				<Header>
					<TiltButton data={{
						buttonCopy: "What we do",
						buttonType: "internalLink",
						buttonHref: "/what-we-do/",
						tiltMaxRotation : 3,
						tiltMaxSkew : 3,
						tiltBackgroundColor : "#000"
					}} />

					<TiltButton data={{
						buttonCopy: "Who we are",
						buttonType: "internalLink",
						buttonHref: "/who-we-are/",
						tiltMaxRotation : 3,
						tiltMaxSkew : 3,
						tiltBackgroundColor : "#000"
					}} />

					<TiltButton data={{
						buttonCopy: "How can we help?",
						buttonType: "internalLink",
						buttonHref: "/how-can-we-help/",
						tiltMaxRotation : 3,
						tiltMaxSkew : 3,
						tiltBackgroundColor : "#000"
					}} />
				</Header>

				<main>
					<RouterHandler />
				</main>

				<Footer>
					<TiltButton data={{
						buttonClass: "footerNav",
						buttonCopy: "Whatsapp",
						buttonIcon: whatsAppIcon,
						buttonType: "externalLink",
						buttonHref: "https://google.com/",
						tiltBackgroundColor : "#FFF"
					}} />

					<TiltButton data={{
						buttonClass: "footerNav",
						buttonCopy: "Phone",
						buttonIcon: phoneIcon,
						buttonType: "externalLink",
						buttonHref: "#",
						tiltBackgroundColor : "#FFF"
					}} />

					<TiltButton data={{
						buttonClass: "footerNav",
						buttonCopy: "Email",
						buttonIcon: emailIcon,
						buttonType: "externalLink",
						buttonHref: "#",
						tiltBackgroundColor : "#FFF"
					}} />
				</Footer>
			</Router>

			<Test />
			
		</div>
	);
};
export default App;