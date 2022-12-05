/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";

//Components
import TestimonialCard from "../../../Components/Cards/TestimonialCard";
import StackCarousel from "../../../Components/Carousels/StackCarousel";

//Interfaces
import { TestimonialSectionInterface } from "../HomePageInterfaces";

//Component
const TestimonialSection : React.FC<TestimonialSectionInterface> = (props : TestimonialSectionInterface) => {
    return (
        <section className="TestimonialSection">
            <div className="inner"> 
                <StackCarousel data={{
                    carouselClass : "",
                    carouselHasArrows : true,
                    carouselHasDots : true,
                }}>
                    <TestimonialCard data={{
                        cardTitle : "addmustard have worked with us across all channels and platforms to deliver highly successful digital performance,",
                        cardCopy : "improved customer experience and increased efficiency of our digital marketing. They have integrated with our team and have completely aligned themselves with our strategy." ,
                        cardAuthor : "Michael Baulk - Marsh & Parsons Chairman",
                        cardBackgroundColor : "#FCF3D4"
                    }} />

                    <TestimonialCard data={{
                        cardTitle : "The addmustard team have worked closely with our management, marketing and technical team to drive",
                        cardCopy : "the growth of our B2C business through a range of digital channels, as well as enhancing our online user experience. The results of the work has been impressive, with significant growth in revenue and improved efficiency from all of our marketing channels.”" ,
                        cardAuthor : "John Wimbleton - Chairman",
                        cardBackgroundColor : "#FCF3D4"
                    }} />

<TestimonialCard data={{
                        cardTitle : "The addmustard team have worked closely with our management, marketing and technical team to drive",
                        cardCopy : "the growth of our B2C business through a range of digital channels, as well as enhancing our online user experience. The results of the work has been impressive, with significant growth in revenue and improved efficiency from all of our marketing channels.”" ,
                        cardAuthor : "John Wimbleton - Chairman",
                        cardBackgroundColor : "#FCF3D4"
                    }} />

<TestimonialCard data={{
                        cardTitle : "The addmustard team have worked closely with our management, marketing and technical team to drive",
                        cardCopy : "the growth of our B2C business through a range of digital channels, as well as enhancing our online user experience. The results of the work has been impressive, with significant growth in revenue and improved efficiency from all of our marketing channels.”" ,
                        cardAuthor : "John Wimbleton - Chairman",
                        cardBackgroundColor : "#FCF3D4"
                    }} />

<TestimonialCard data={{
                        cardTitle : "The addmustard team have worked closely with our management, marketing and technical team to drive",
                        cardCopy : "the growth of our B2C business through a range of digital channels, as well as enhancing our online user experience. The results of the work has been impressive, with significant growth in revenue and improved efficiency from all of our marketing channels.”" ,
                        cardAuthor : "John Wimbleton - Chairman",
                        cardBackgroundColor : "#FCF3D4"
                    }} />
                </StackCarousel>
            </div>
        </section>
    );
};
export default TestimonialSection;