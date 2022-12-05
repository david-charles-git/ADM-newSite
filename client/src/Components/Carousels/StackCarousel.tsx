/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import {Children, useState} from "react";

//Components
import Tilt from "../Tilt/Tilt";
import TiltButton from "../Buttons/TiltButton";

//Styles
import "./Carousel.scss";

//Interfaces
import { StackCarouselInterface } from "./CarouselInterfaces";

//Component
const StackCarousel : React.FC<StackCarouselInterface> = (props : StackCarouselInterface) => {
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
    var [carouselTouchStartValue, setCarouselTouchStartValue] = useState<number>(0)

    //Functions
    const handleIncreaseActiveStackCount : () => void = () => {
        var newActivestackCount : number = activeStackCount + 1;

        if (newActivestackCount >= childrenCount - 1) {
            newActivestackCount = childrenCount - 1;

            setRightArrowIsActive(false);

        }

        setActiveStackCount(newActivestackCount);
        setLeftArrowIsActive(true);
    };
    const handleDecreaseActiveStackCount : () => void = () => {
        var newActivestackCount : number = activeStackCount -1;

        if (activeStackCount - 1 <= 0) {
            newActivestackCount = 0;

            setLeftArrowIsActive(false);

        }

        setActiveStackCount(newActivestackCount);
        setRightArrowIsActive(true);
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

        setActiveStackCount(newActivestackCount);
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
    var StackCarouselClass : string = carouselClass ? "StackCarousel " + carouselClass : "StackCarousel";
        StackCarouselClass = carouselHasArrows ? StackCarouselClass + " hasArrows" : StackCarouselClass;
        StackCarouselClass = carouselHasDots ? StackCarouselClass + " hasDots" : StackCarouselClass;

    return (
        <div className={StackCarouselClass}>
            <div className="outer" onTouchStart={ handleCarouselTouchStart } onTouchEnd={ handleCarouselTouchEnd } onTouchCancel={ handleCarouselTouchEnd }>
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

                <div className="inner">
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
export default StackCarousel;