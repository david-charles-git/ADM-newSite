/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from 'react';
import { Children, useEffect, useState } from "react";

//Components
import ImageContainer from "../ImageContainers/ImageContainer";
import Tilt from '../Tilt/Tilt';

//Styles
import "./Header.scss";

//Interfaces
import { HeaderInterface, HeaderNavigationStyleInterface } from "./HeaderInterfaces";

//Images
const burgerMenuOpen_icon : string = require("../../Images/burgerMenuOpen_icon.svg").default;
const burgerMenuClose_icon : string = require( "../../Images/burgerMenuClose_icon.svg").default;
const headerLogo : string = require("../../Images/ADM_Logo_Black.svg").default;

//Component
const Header : React.FC<HeaderInterface> = (props : HeaderInterface) => {
    //States
    var [navigationIsOpen, setNavigationIsOpen] = useState<boolean>(false);
    var [burgerMenuIcon, setBurgerMenuIcon] = useState<string>(burgerMenuOpen_icon);

    //Functions
    const handleNavigationOpenClose : () => void = () => {
        const newBurgerMenuIcon : string = navigationIsOpen ? burgerMenuOpen_icon : burgerMenuClose_icon;
        
        setBurgerMenuIcon(newBurgerMenuIcon);
        setNavigationIsOpen(!navigationIsOpen);
    };
    const handleNavigationOpenCloseOnScreenSizeChange : () => void = () => {
        setBurgerMenuIcon(burgerMenuOpen_icon);
        setNavigationIsOpen(false);
    };
    
    //Variables
    const childrenCount : number =  Children.toArray(props.children).length;
    const navigationClass : string = navigationIsOpen ? "navigation active" : "navigation";
    const navigationStyle : HeaderNavigationStyleInterface = {
        gridTemplateColumns: "repeat(" + childrenCount + ", auto)"
        
    };

    //Effects 
    useEffect(() => {
        window.addEventListener("resize", handleNavigationOpenCloseOnScreenSizeChange);

    }, []);

    return (
        <header className="Header">
            <div className="inner">
                <div className="logo">
                    <ImageContainer data={{ imageSource: headerLogo, imageAlt: "home button", imageHrefType : "internalLink", imageHref: "/" }} />
                </div>

                <nav className={navigationClass}>
                    <div className="inner" style={navigationStyle}>
                        {
                            Children.toArray(props.children).map((child : React.ReactNode, key : number) => {
                                return (
                                    <div key={key} className='item'>
                                        {child}
                                    </div>
                                )
                            })
                        }
                    </div>
                </nav>

                <div className="burgerMenuContainer" onClick={handleNavigationOpenClose}>
                    <Tilt data={{ maxRotation : 4, maxSkew: 4, backgroundColor : "#000000" }} />
                    
                    <div className="inner">
                        <div className="burgerMenu" style={{ backgroundImage: "url(" + burgerMenuIcon + ")" }} />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;