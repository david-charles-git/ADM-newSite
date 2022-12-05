/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React, { useState, useEffect } from "react";
import useContentful from "../../../Utilities/contentfulHooks";

//Components
import ImageContainer from "../../../Components/ImageContainers/ImageContainer";
import Grid from "../../../Components/Grids/Grid";
import BlogCard from "../../../Components/Cards/BlogCard";

//Interfaces
import { BlogSectionInterface } from "../HomePageInterfaces";

//Component
const BlogSection : React.FC<BlogSectionInterface> = (props : BlogSectionInterface) => {
    //Properties
	const { getBlogPosts } : any = useContentful();
    
    //States
	const [blogPosts, setBlogPosts] = useState<Array<any>>([]);

    //Effects
    useEffect(() => {
		getBlogPosts()
			.then(
				(response : Array<any>) => { 
					const newArray = response || [];

					setBlogPosts(newArray);
				}
			)
			.catch(
                (error : any) => { console.log(error); }
            )
	}, []);

    return (
        <section className="BlogSection">
            <div className="backgroundImage">
                <div className="inner">
                    <ImageContainer data={{
                        imageSource : "/images/elia-pellegrini-4Ew8WTOcTh4-unsplash%201.png"
                    }} />
                </div>
            </div>

            <div className="inner"> 
                <Grid data={{
                    gridClass : "grid-3-3-1",
                    gridLoadCount : 3,
                    gridPagination : "link",
                    gridPaginationCopy : "View all",
                    gridPaginationLinkHref : "/",
                    gridPaginationLinkType : "internalLink"
                }}>
                    {
                        blogPosts.map((blogPost : any, key : number) => {
                            const coverImageFile : any = blogPost.coverImage.file;
                            const coverImage : string = coverImageFile ? coverImageFile.url : "";

                            return (
                                <BlogCard key={ key } data={{
                                    cardTitle : blogPost.excerpt,
                                    cardImage : coverImage,
                                    cardImageAlt : "",
                                    cardTags : blogPost.relatedDepartments,
                                    cardLinkCopy : "Read more",
                                    cardLinkType : blogPost.linkType,
                                    cardLinkHref : blogPost.linkHref,
                                    cardBackgroundColor : "#000"
                                }} />
                            )
                        })
                    }
                    {/* <BlogCard data={{
                        cardClass : "",
                        cardTitle : "How to prepare & optimise your marketing in a high inflation, low growth world.",
                        cardImage : "",
                        cardImageAlt : "",
                        cardTags : ["brand", "marketing"],
                        cardLinkCopy : "Read more",
                        cardLinkType : "internalLink",
                        cardLinkHref : "/",
                        cardBackgroundColor : "#000"
                    }} />
                
                    <BlogCard data={{
                        cardClass : "",
                        cardTitle : "Opinion  Piece: Social Media - Pub or Shop?",
                        cardImage : "/images/alexander-popov-2GNBoMgKYEo-unsplash%201.png",
                        cardImageAlt : "",
                        cardTags : ["brand", "marketing"],
                        cardLinkCopy : "Read more",
                        cardLinkType : "internalLink",
                        cardLinkHref : "/",
                        cardBackgroundColor : "#000"
                    }} />

                    <BlogCard data={{
                        cardClass : "",
                        cardTitle : "Our chairman’s 5 tips for getting to number 1 on Google.",
                        cardImage : "",
                        cardImageAlt : "",
                        cardTags : ["marketing", "technology"],
                        cardLinkCopy : "Read more",
                        cardLinkType : "internalLink",
                        cardLinkHref : "/",
                        cardBackgroundColor : "#000"
                    }} /> */}
                </Grid>
            </div>
        </section>
    );
};
export default BlogSection;