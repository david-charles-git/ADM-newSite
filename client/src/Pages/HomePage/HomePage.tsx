/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

//Components
import TiltButton from "../../Components/Buttons/TiltButton";
import ImageContainer from "../../Components/ImageContainers/ImageContainer";
import BlogSection from "./Sections/BlogSection";
import TestimonialSection from "./Sections/TestimonialSection";
import AboutSection from "./Sections/AboutSection";
import OurWorkSection from "./Sections/OurWorkSection";
import IntroSection from "./Sections/IntroSection";

//Styles
import "./HomePage.scss";

//Interfaces
import { HomePageInterface } from "./HomePageInterfaces";

//Component
const HomePage : React.FC<HomePageInterface> = (props : HomePageInterface) => {
    //States
    var [introSectionData, setIntroSectionData] = useState<any>({});
    var [ourWorkSectionData, setOurWorkSection] = useState<any>({});
    var [aboutSectionData, setAboutSectionData] = useState<any>({});
    var [testimonialSectionData, setTestimonialSectionData] = useState<any>({});
    var [blogSectionData, setBlogSectionData] = useState<any>({});

    //Functions
    const generateIntroSectionTitle_1 : () => JSX.Element = () => {
        const title_1 : string = introSectionData.title_1;
        const indexOfFirstSpace : number = title_1.indexOf(" ");

        if (indexOfFirstSpace > -1) {
            const firstWord : string = title_1.substring(0, indexOfFirstSpace);
            const otherWords : string = title_1.substring(indexOfFirstSpace, title_1.length);

            return (
                <h1><TiltButton data={{ buttonCopy : firstWord, tiltBackgroundColor : "#000000", tiltMaxRotation : 4, tiltMaxSkew : 4 }} />{otherWords}</h1>
            )
        }

        return (
            <h1>{title_1}</h1>
        )
    }

    //Effects
    useEffect(() => {
        axios.get("./data/HomePageData.json")
            .then((result : AxiosResponse) => {
                setIntroSectionData(result.data.homePageData.introSection);
                setOurWorkSection(result.data.homePageData.ourWorkSection);
                setAboutSectionData(result.data.homePageData.aboutSection);
                setTestimonialSectionData(result.data.homePageData.tesimonialSection);
                setBlogSectionData(result.data.homePageData.blogSection);
            })
            .catch((error : any) => { console.log(error); });
    }, []);

    return (
        <div id="HomePage">
            <div className="inner">
                <IntroSection data={{}}>
                    <div className="topSection">
                        <div className="inner">
                            {
                                introSectionData.backgroundImage_1 ?
                                    <div className="backgroundImage">
                                        <div className="inner">
                                            <ImageContainer data={{ imageSource : introSectionData.backgroundImage_1 }} />
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }

                            <div className="contentContainer">
                                <div className="inner">
                                    {
                                        introSectionData.title_1 ?
                                            generateIntroSectionTitle_1()
                                            :
                                            <></>
                                    }

                                    {
                                        introSectionData.title_2 ?
                                            <TiltButton data={{ buttonCopy : introSectionData.title_2, tiltBackgroundColor : "#000000", tiltMaxRotation : 2, tiltMaxSkew : 2 }} />
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottomSection">
                        <div className="inner">
                            {
                                introSectionData.backgroundImage_2 ?
                                    <div className="backgroundImage">
                                        <div className="inner">
                                            <ImageContainer data={{ imageSource : introSectionData.backgroundImage_2 }} />
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }

                            <div className="contentContainer">
                                <div className="inner">
                                    {
                                        introSectionData.copy_1 ?
                                            <p dangerouslySetInnerHTML={{__html: introSectionData.copy_1}} />
                                            :
                                            <></>
                                    }

                                    {
                                        introSectionData.linkCopy && introSectionData.linkType && introSectionData.linkHref ?
                                            <TiltButton data={{
                                                buttonCopy : introSectionData.linkCopy,
                                                buttonType : introSectionData.linkType,
                                                buttonHref : introSectionData.linkHref,
                                                tiltBackgroundColor : "#000000",
                                                tiltMaxRotation : 2,
                                                tiltMaxSkew : 2 }} />
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </IntroSection>

                <OurWorkSection data={ourWorkSectionData} />

                <AboutSection data={aboutSectionData} />
                
                <TestimonialSection data={testimonialSectionData} />

                <BlogSection data={blogSectionData} />
            </div>
        </div>
    );
};
export default HomePage;