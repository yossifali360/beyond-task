import { useGenerateQueries } from "../hooks/useGenerateQueries";

export const useNewsBlogsData = () => {
    return useGenerateQueries({
        api: 'news',
        keys: ["blogs"],
        apiEndpoint: "top-headlines",
        filterName: "blogs",
    });
}

export const useGuardianBlogsData = () => {
    return useGenerateQueries({
        api: 'guardian',
        keys: ["blogs2"],
        apiEndpoint: "search",
        filterName: "blogs",
    });
}
