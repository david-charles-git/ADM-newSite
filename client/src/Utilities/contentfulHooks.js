/*
	Project : AddMustard
	Author(s) : David Charles
*/

//Dependencies
import { createClient } from "contentful";

//Hooks
const useContentful = () => {
    //Variables
    const clientObject = {
        space : "bqh2xhm4gllt",
        accessToken : "QSeB1ZowcjPUBvb9eOWQAG0GwWcgcnLRp_fh2Anc7Rs", //preview token - vurSwNXwxSkwylZZPIRvq0-ovxmrOB2OyFdLF3v17a4
        host : "cdn.contentful.com"
    };
    const client = createClient(clientObject);

    //Functions
    const getStaffMembers = async () => {
        try {
            const entriesObject = {
                content_type : "staffMember",
                select : "fields",
                order : "fields.name",
                //"fields.key" : "fields.value"
            };
            const entries = await client.getEntries(entriesObject);
            const sanitizedEntries = entries.items.map((item) => {
                const headshot = item.fields.headshot.fields;
                const staffMember = {
                    ...item.fields,
                    headshot
                };

                return staffMember;
            });

            return sanitizedEntries;

        } catch(error) {
            console.log("getStaffMembers error : " + error);
        }
    };
    const getCaseStudies = async () => {
        try {
            const entriesObject = {
                content_type : "caseStudies",
                select : "fields",
                order : "fields.title",
                //"fields.key" : "fields.value"
            };
            const entries = await client.getEntries(entriesObject);
            const sanitizedEntries = entries.items.map((item) => {
                const coverImage = item.fields.coverImage.fields;
                const featureImage = item.fields.featureImage.fields;
                const caseStudy = {
                    ...item.fields,
                    coverImage,
                    featureImage
                };

                return caseStudy;
            });

            return sanitizedEntries;

        } catch(error) {
            console.log("getCaseStudies error : " + error);

        }
    };
    const getBlogPosts = async () => {
        try {
            const entriesObject = {
                content_type : "blogPosts",
                select : "fields",
                order : "fields.title",
                //"fields.key" : "fields.value"
            };
            const entries = await client.getEntries(entriesObject);
            const sanitizedEntries = entries.items.map((item) => {
                const coverImage = item.fields.coverImage ? item.fields.coverImage.fields : { fields : { url : "" } };
                const blogPost = {
                    ...item.fields,
                    coverImage,
                };

                return blogPost;
            });

            return sanitizedEntries;

        } catch(error) {
            console.log("getBlogPosts error : " + error);

        }
    };

    return { getStaffMembers, getCaseStudies, getBlogPosts }
}
export default useContentful;