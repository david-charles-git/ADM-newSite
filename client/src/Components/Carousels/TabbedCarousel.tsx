/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import {Children, useState, useEffect} from "react";

//Components
import Tilt from "../Tilt/Tilt";
import TiltButton from "../Buttons/TiltButton";

//Styles
import "./Carousel.scss";

//Interfaces
import { TabbedCarouselInterface } from "./CarouselInterfaces";

//Component
const TabbedCarousel : React.FC<TabbedCarouselInterface> = (props : TabbedCarouselInterface) => {
    //Properties
    const childrenCount : number = Children.count(props.children);
    const carouselClass : string | undefined = props.data.carouselClass;
    const carouselViewAllCopy : string | undefined = props.data.carouselViewAllCopy;
    const carouselViewAllType : string | undefined = props.data.carouselViewAllType;
    const carouselViewAllHref : string | undefined = props.data.carouselViewAllHref;
    
    //States
    var [activeStackCount, setActiveStackCount] = useState<number>(0);
    var [rightValue, setRightValue] = useState<number>(96);

    //Functions
    const handleSetActiveStackCount : (key : number) => void = (key) => {
        var newActivestackCount : number = key;

        if (newActivestackCount <= 0) {
            newActivestackCount = 0;

        } else if (newActivestackCount >= childrenCount - 1 ) {
            newActivestackCount = childrenCount -1;

        } else {

        }

        setActiveStackCount(newActivestackCount);
    };
    const handleSetToTopRightValue : () => void = () => {
        const maxScreenWidth : number = 1920;
        const screenWidth : number = window.innerWidth;
        const screenBreakPoint : number = maxScreenWidth + ( maxScreenWidth / 10 );
        const rightValue : number = screenWidth <= screenBreakPoint ? ( screenWidth / 20 ) : ( ( screenWidth - maxScreenWidth ) / 2 );

        setRightValue(rightValue);
    };

    //Variables
    const TabbedCarouselClass : string = carouselClass ? "TabbedCarousel " + carouselClass : "TabbedCarousel";

    //Effects
    useEffect(() => {
        window.addEventListener("resize", handleSetToTopRightValue);
        window.addEventListener("load", handleSetToTopRightValue);
    });

    return (
        <div className={TabbedCarouselClass}>
            <div className="outer">
                <div className="inner">
                    {
                        childrenCount > 0 ?
                            Children.map(props.children, (child : React.ReactNode | React.ReactElement, key : number) => {
                                const childClass : string = key === activeStackCount ? "item active" : "item";

                                return (
                                    <div className={childClass} key={key}>
                                        {child}
                                    </div>
                                )
                            })
                            :
                            <></>
                    }
                </div>

                {
                    childrenCount > 1 ?
                        <div className="tabContainer" style={{ right: rightValue + "px" }}>
                            <div className="inner">
                                {
                                    childrenCount > 0 ?
                                        Children.map(props.children, (child : React.ReactNode | React.ReactElement, key : number) => {
                                            const target : any = child ? child : { props : { data : { cardTitle : "" } } };
                                            const props : any = target.props ? target.props : { data : { cardTitle : "" } };
                                            const data : any = props.data ? props.data : { cardTitle : "" };
                                            const childTitle : string = data.cardTitle ? data.cardTitle : "";
                                            const childClass : string = key === activeStackCount ? "tab active" : "tab";
            
                                            return (
                                                <div className={childClass} key={key} onClick={() => { handleSetActiveStackCount(key) }}>
                                                    <div className="inner">
                                                        <div className="dot">
                                                            <div className="inner">
                                                                <Tilt data={{ maxRotation : 4, maxSkew : 4, backgroundColor : "#ffffff" }} />
                                                            </div>
                                                        </div>

                                                        {
                                                            childTitle ? <p>{childTitle}</p> : <></>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        :
                        <></>
                }

                {
                    carouselViewAllCopy ?
                        <TiltButton data={{ buttonCopy : carouselViewAllCopy, buttonType : carouselViewAllType, buttonHref : carouselViewAllHref }} />
                        :
                        <></>
                }
            </div>
        </div>
    );
};
export default TabbedCarousel;