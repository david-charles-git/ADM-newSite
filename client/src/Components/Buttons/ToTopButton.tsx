/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import { useState, useEffect } from "react";

//Interfaces
import { ToTopButtonInterface } from "./ButtonInterfaces";

//Styles
import "./Button.scss";
import Tilt from "../Tilt/Tilt";

//Component
const ToTopButton : React.FC<ToTopButtonInterface> = (props : ToTopButtonInterface) => {
    //Properties
    const minBottomValue : number = props.data.minBottomValue;
    const maxBottomValue : number = props.data.maxBottomValue;

    //States
    var [bottomValue, setBottomValue] = useState<number>(minBottomValue);
    var [rightValue, setRightValue] = useState<number>(96);

    //Functions
    const handleScrollToTop : () => void = () => {
        const scrollLeftValue : number = 0;
        const scrollTopValue : number = 0;
        const scrollBehavior : ScrollBehavior = "smooth";

        window.scroll({
            top: scrollTopValue,
            left: scrollLeftValue,
            behavior: scrollBehavior
        });
    };
    const handleToTopWindowScroll : () => void = () => {
        const rootElement : HTMLElement | null = document.getElementById("root");

        if (rootElement) {
            const pageHeight : number = rootElement.clientHeight;
            const windowHeight : number = window.innerHeight;
            const scrollAmount : number = window.scrollY;
            const baseOfPageScrollValue : number = windowHeight + scrollAmount;

            if (bottomValue === minBottomValue && (baseOfPageScrollValue + 80) >= pageHeight) {
                setBottomValue(maxBottomValue);

            } else if (bottomValue === maxBottomValue && baseOfPageScrollValue < (pageHeight - 80)) {
                setBottomValue(minBottomValue);

            }
        }
    };
    const handleSetToTopRightValue : () => void = () => {
        const maxScreenWidth : number = 1920;
        const screenWidth : number = window.innerWidth;
        const screenBreakPoint : number = maxScreenWidth + ( maxScreenWidth / 10 );
        const rightValue : number = screenWidth <= screenBreakPoint ? ( screenWidth / 20 ) : ( ( screenWidth - maxScreenWidth ) / 2 );

        setRightValue(rightValue);
    };

    //Effects
    useEffect(() => {
        window.addEventListener("scroll", handleToTopWindowScroll);
        window.addEventListener("resize", handleSetToTopRightValue);
        window.addEventListener("load", handleSetToTopRightValue);
    });

    return (
        <div className="ToTopButton" onClick={handleScrollToTop} style={{ bottom : bottomValue + "px", right : rightValue + "px" }}>
            <Tilt data ={{ maxRotation : 4, maxSkew : 4, backgroundColor : "#ffffff"}} />

            <div className="inner">
                <div className="toTop" />
            </div>
        </div>
    );
};
export default ToTopButton;