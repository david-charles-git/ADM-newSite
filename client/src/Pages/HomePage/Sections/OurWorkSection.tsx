/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React, { useState, useEffect } from "react";
import useContentful from "../../../Utilities/contentfulHooks";

//Components
import Tilt from "../../../Components/Tilt/Tilt";
import SlideCarousel from "../../../Components/Carousels/SlideCarousel";
import SlideCarouselBlogCard from "../../../Components/Cards/SlideCarouselBlogCard";

//Interfaces
import { OurWorkSectionInterface } from "../HomePageInterfaces";

//Component
const OurWorkSection : React.FC<OurWorkSectionInterface> = (props : OurWorkSectionInterface) => {
    //Properties
	const { getCaseStudies } : any = useContentful();
    const title : string | undefined = props.data.title;

    //States
	const [caseStudies, setCaseStudies] = useState<Array<any>>([]);

    //Effects
    useEffect(() => {
		getCaseStudies()
			.then(
				(response : Array<any>) => { 
					const newArray = response || [];

					setCaseStudies(newArray);
				}
			)
			.catch(
                (error : any) => { console.log(error); }
            )
	}, []);

    return (
        <section className="OurWorkSection">
            <div className="inner"> 
            {
                title ?
                    <div className="titleContainer">
                        <div className="inner">
                            <Tilt data={{ maxRotation : 2, maxSkew : 2, backgroundColor : "#000000" }} />

                            <h1>{title}</h1>
                        </div>
                    </div>
                    :
                    <></>
            }

                <SlideCarousel data={{
                    // carouselHasArrows : carouselData.data.carouselHasArrows,
                    // carouselHasDots : carouselData.data.carouselHasDots,
                    // carouselViewAllCopy : carouselData.data.carouselViewAllCopy,
                    // carouselViewAllType : carouselData.data.carouselViewAllType,
                    // carouselViewAllHref : carouselData.data.carouselViewAllHref
                    "carouselHasArrows" : true,
                    "carouselHasDots" : true,
                    "carouselViewAllCopy" : "Find out more",
                    "carouselViewAllType" : "internalLink",
                    "carouselViewAllHref" : "/"
                }}>
                    {
                        caseStudies.map((caseStudy : any, key : number) => {
                            const coverImageFile : any = caseStudy.coverImage.file;
                            const coverImage : string = coverImageFile ? coverImageFile.url : "";
                            const featureImageFile : any = caseStudy.featureImage.file;
                            const featureImage : string = featureImageFile ? featureImageFile.url : "";

                            return (
                                <SlideCarouselBlogCard key={ key } data={{
                                    cardLogoImage : featureImage,
                                    cardImage : coverImage,
                                    cardLinkType : caseStudy.linkType,
                                    cardLinkHref : caseStudy.linkHref,
                                    cardBackgroundColor : "#000",
                                }}>
                                    {
                                        caseStudy.excerpt ?
                                            <p dangerouslySetInnerHTML={{ __html : caseStudy.excerpt }} />
                                            :
                                            <></>
                                    }
                                </SlideCarouselBlogCard>
                            )
                        })
                    }
                </SlideCarousel>
            </div>
        </section>
    );
};
export default OurWorkSection;