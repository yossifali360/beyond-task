import axios from "axios";

export default function useAxios() {
    const NEWS_API_LINK = process.env.NEXT_PUBLIC_NEWS_API_LINK;
    const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const GUARDIAN_API_LINK = process.env.NEXT_PUBLIC_GUARDIAN_API_LINK;
    const GUARDIAN_API_KEY = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;


    const newsApiAxios = axios.create({
        baseURL: NEWS_API_LINK,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "en",
        },
        params: {
            apiKey: NEWS_API_KEY,
            country: 'us'
        },
    });

    const guardianApiAxios = axios.create({
        baseURL: GUARDIAN_API_LINK,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "en",
        },
        params: {
            'api-key': GUARDIAN_API_KEY,
            'page-size': 50,
            country: 'us',
            'show-references': 'author',
            'show-fields': 'thumbnail,standfirst'
        },
    });


    return { newsApiAxios, guardianApiAxios };
}
