/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import SlideCarousel from "../../../Components/Carousels/SlideCarousel";
import SlideCarouselBlogCard from "../../../Components/Cards/SlideCarouselBlogCard";

//Components
import Tilt from "../../../Components/Tilt/Tilt";

//Interfaces
import { OurWorkSectionInterface } from "..//WhatWeDoPageInterfaces";


//Component
const OurWorkSection : React.FC<OurWorkSectionInterface> = (props : OurWorkSectionInterface) => {
    return (
        <section className="OurWorkSection">
            <div className="inner"> 
                <div className="titleContainer">
                    <div className="inner">
                        <Tilt data={{ maxRotation : 2, maxSkew : 2, backgroundColor : "#000000" }} />

                        <h1>Our Work</h1>
                    </div>
                </div>

                <SlideCarousel data={{
                    carouselHasArrows : true,
                    carouselHasDots : true,
                    carouselViewAllCopy : "Find out more",
                    carouselViewAllType : "internalLink",
                    carouselViewAllHref : "/"
                }}>
                    <SlideCarouselBlogCard data={{
                        cardLogoImage : "/images/ASP_logo.png",
                        cardImage : "/images/ASP_blogImage.png",
                        cardLinkType : "internalLink",
                        cardLinkHref : "/",
                        cardBackgroundColor : "#000",
                    }}>
                        <p>Adopting a brand-centric approach to marketing, <span className="tilt" style={{ backgroundColor : "#F0BEC9" }}>driving growth in sales</span> & margins in luxury retail</p>
                    </SlideCarouselBlogCard>

                    <SlideCarouselBlogCard data={{
                        cardLogoImage : "/images/MAP_logo.png",
                        cardImage : "/images/MAP_blogImage.png",
                        cardLinkType : "internalLink",
                        cardLinkHref : "/",
                        cardBackgroundColor : "#000"
                    }}>
                        <p>The impact of <span className="tilt" style={{ backgroundColor : "#F27250" }}>improving online experience</span> on marketing efficiency</p>
                    </SlideCarouselBlogCard>

                    <SlideCarouselBlogCard data={{
                        cardLogoImage : "/images/FCG_logo.png",
                        cardImage : "/images/FCG_blogImage.png",
                        cardLinkType : "internalLink",
                        cardLinkHref : "/",
                        cardBackgroundColor : "#000"
                    }}>
                        <p><span className="tilt" style={{ backgroundColor : "#F0BEC9" }}>Brand evolution</span> engagement</p>
                    </SlideCarouselBlogCard>
                </SlideCarousel>
            </div>
        </section>
    );
};
export default OurWorkSection;