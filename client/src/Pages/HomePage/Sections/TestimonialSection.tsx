/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React, { useState, useEffect } from "react";
import useContentful from "../../../Utilities/contentfulHooks";

//Components
import TestimonialCard from "../../../Components/Cards/TestimonialCard";
import StackCarousel from "../../../Components/Carousels/StackCarousel";

//Interfaces
import { TestimonialSectionInterface } from "../HomePageInterfaces";

//Component
const TestimonialSection : React.FC<TestimonialSectionInterface> = (props : TestimonialSectionInterface) => {
    //Properties
	const { getTestimonials } : any = useContentful();

    //States
	const [testimonials, setTestimonials] = useState<Array<any>>([]);

    //Effects
    useEffect(() => {
		getTestimonials()
			.then(
				(response : Array<any>) => { 
					const newArray = response || [];

					setTestimonials(newArray);
				}
			)
			.catch(
                (error : any) => { console.log(error); }
            )
	}, []);

    return (
        <section className="TestimonialSection">
            <div className="inner"> 
                <StackCarousel data={{
                    carouselClass : "",
                    carouselHasArrows : true,
                    carouselHasDots : true,
                }}>
                    {
                        testimonials.map((testimonial : any, key : number) => {
                            return (
                                <TestimonialCard key={ key } data={{
                                    cardTitle : testimonial.excerptTitle,
                                    cardCopy : testimonial.excerptCopy,
                                    cardAuthor : testimonial.author,
                                    cardBackgroundColor : "#FCF3D4"
                                }} />
                            )
                        })
                    }
                </StackCarousel>
            </div>
        </section>
    );
};
export default TestimonialSection;