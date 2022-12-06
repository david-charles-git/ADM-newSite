/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React, { useEffect } from "react";
import {Children, useState} from "react";

//Components
import Tilt from "../Tilt/Tilt";
import TiltButton from "../Buttons/TiltButton";

//Styles
import "./Carousel.scss";

//Interfaces
import { SlideCarouselInterface } from "./CarouselInterfaces";

//Component
const SlideCarousel : React.FC<SlideCarouselInterface> = (props : SlideCarouselInterface) => {
    //Properties
    const childrenCount : number = Children.count(props.children);
    const carouselClass : string | undefined = props.data.carouselClass;
    const carouselHasArrows : boolean | undefined = props.data.carouselHasArrows;
    const carouselHasDots : boolean | undefined = props.data.carouselHasDots;
    const carouselViewAllCopy : string | undefined = props.data.carouselViewAllCopy;
    const carouselViewAllType : string | undefined = props.data.carouselViewAllType;
    const carouselViewAllHref : string | undefined = props.data.carouselViewAllHref;
    
    //States
    var [activeStackCount, setActiveStackCount] = useState<number>(0);
    var [leftArrowIsActive, setLeftArrowIsActive] = useState<boolean>(false);
    var [rightArrowIsActive, setRightArrowIsActive] = useState<boolean>(true);
    var [carouselInnerTranslateXValue, setCarouselInnerTranslateXValue] = useState<number>(0);
    var [translationAmount, setTranslationAmount] = useState<number>(800);
    var [translationBufferAmount, setTranslationBufferAmount] = useState<number>(100);
    var [carouselTouchStartValue, setCarouselTouchStartValue] = useState<number>(0);

    //Functions
    const handleIncreaseActiveStackCount : () => void = () => {
        var newActivestackCount : number = activeStackCount + 1;

        if (newActivestackCount >= childrenCount - 1) {
            newActivestackCount = childrenCount - 1;

            setRightArrowIsActive(false);

        }

        const newCarouselInnerTranslateXValue : number = (newActivestackCount * translationAmount) + ( newActivestackCount * translationBufferAmount );

        setActiveStackCount(newActivestackCount);
        setLeftArrowIsActive(true);
        setCarouselInnerTranslateXValue(newCarouselInnerTranslateXValue);
    };
    const handleDecreaseActiveStackCount : () => void = () => {
        var newActivestackCount : number = activeStackCount -1;

        if (activeStackCount - 1 <= 0) {
            newActivestackCount = 0;

            setLeftArrowIsActive(false);

        }

        const newCarouselInnerTranslateXValue : number = (newActivestackCount * translationAmount) + ( newActivestackCount * translationBufferAmount );

        setActiveStackCount(newActivestackCount);
        setRightArrowIsActive(true);
        setCarouselInnerTranslateXValue(newCarouselInnerTranslateXValue);
    };
    const handleSetActiveStackCount : (key : number) => void = (key) => {
        var newActivestackCount : number = key;

        if (newActivestackCount <= 0) {
            newActivestackCount = 0;

            setLeftArrowIsActive(false);
            setRightArrowIsActive(true);

        } else if (newActivestackCount >= childrenCount - 1 ) {
            newActivestackCount = childrenCount -1;

            setRightArrowIsActive(false);
            setLeftArrowIsActive(true);

        } else {
            setRightArrowIsActive(true);
            setLeftArrowIsActive(true);

        }
        
        const newCarouselInnerTranslateXValue : number = (newActivestackCount * translationAmount) + ( newActivestackCount * translationBufferAmount );

        setActiveStackCount(newActivestackCount);
        setCarouselInnerTranslateXValue(newCarouselInnerTranslateXValue);
    };
    const handleSetTranslationAmounts : () => void = () => {
        const windowBreakPoint : number = 768;
        const windowWidth : number = window.innerWidth;
        const newTranslationBufferAmount : number = windowWidth <= windowBreakPoint ? 50 : 100;
        var newTranslationAmount : number = windowWidth <= windowBreakPoint ? 350 : 800;

        newTranslationAmount = newTranslationAmount > (windowWidth * 0.8) ? (windowWidth * 0.8) : newTranslationAmount;

        setTranslationAmount(newTranslationAmount);
        setTranslationBufferAmount(newTranslationBufferAmount);
    };
    const handleCarouselTouchStart : (event : any) => void = (event) => {
        const touchXPosition : number = event.touches[0].clientX;
        
        setCarouselTouchStartValue(touchXPosition);
    };
    const handleCarouselTouchEnd : (event : any) => void = (event) => {
        const touchXPosition : number = event.changedTouches[0].clientX;

        if (touchXPosition >= carouselTouchStartValue) {
            handleDecreaseActiveStackCount();
            
        } else if (touchXPosition < carouselTouchStartValue) {
            handleIncreaseActiveStackCount();

        } else {
            //do nothing
        }
    };

    //Variables
    const leftArrowClass : string = leftArrowIsActive ? "arrowContainer left active" : "arrowContainer left";
    const rightArrowClass : string = rightArrowIsActive ? "arrowContainer right active" : "arrowContainer right";
    var SlideCarouselClass : string = carouselClass ? "SlideCarousel " + carouselClass : "SlideCarousel";
        SlideCarouselClass = carouselHasArrows ? SlideCarouselClass + " hasArrows" : SlideCarouselClass;
        SlideCarouselClass = carouselHasDots ? SlideCarouselClass + " hasDots" : SlideCarouselClass;

    //Effects
    useEffect(() => {
        window.addEventListener("load", handleSetTranslationAmounts);
        window.addEventListener("resize", handleSetTranslationAmounts);
        window.addEventListener("resize", () => { setActiveStackCount(0); setLeftArrowIsActive(false); setRightArrowIsActive(true); setCarouselInnerTranslateXValue(0); });
    }, [])

    return (
        <div className={SlideCarouselClass}>
            <div className="outer">
                {
                    carouselHasArrows && childrenCount > 1 ?
                        <div className={leftArrowClass}>
                            <div className="inner">
                                <div className="arrow" onClick={handleDecreaseActiveStackCount}>
                                    <Tilt data={{ maxRotation : 4, maxSkew : 4, backgroundColor : "#000000" }} />

                                    <div className="inner" />
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }
                
                <div className="inner" style={{ transform : "translateX(-" + carouselInnerTranslateXValue + "px)" }} onTouchStart={ handleCarouselTouchStart } onTouchEnd={ handleCarouselTouchEnd } onTouchCancel={ handleCarouselTouchEnd }>
                    {
                        childrenCount > 0 ?
                            Children.map(props.children, (child : React.ReactNode | React.ReactElement, key : number) => {
                                const childClass : string = key <= activeStackCount ? "item active" : "item";

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
                    carouselHasArrows && childrenCount > 1 ?
                        <div className={rightArrowClass}>
                            <div className="inner">
                                <div className="arrow" onClick={handleIncreaseActiveStackCount}>
                                    <Tilt data={{ maxRotation : 4, maxSkew : 4, backgroundColor : "#000000" }} />

                                    <div className="inner" />
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }

                {
                    carouselHasDots && childrenCount > 1 ?
                        <div className="dotContainer">
                            <div className="inner" style={{ gridTemplateColumns : "repeat(" + childrenCount + ",auto)" }}>
                                {
                                    childrenCount > 0 ?
                                        Children.map(props.children, (child : React.ReactNode | React.ReactElement, key : number) => {
                                            const childClass : string = key === activeStackCount ? "dot active" : "dot";
            
                                            return (
                                                <div className={childClass} key={key} onClick={() => { handleSetActiveStackCount(key) }}>
                                                    <Tilt data={{ maxRotation : 4, maxSkew : 4, backgroundColor : "#000000" }} />
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
            </div>

            {
                carouselViewAllCopy ?
                    <TiltButton data={{ buttonCopy : carouselViewAllCopy, buttonType : carouselViewAllType, buttonHref : carouselViewAllHref, tiltBackgroundColor : "#000000" }} />
                    :
                    <></>
            }
        </div>
    );
};
export default SlideCarousel;