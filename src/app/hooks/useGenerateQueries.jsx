import { useQuery } from "@tanstack/react-query";
import useStore from "../zustand/store";
import useAxios from "../axios/useAxios";
import getFiltersQuery from "../utils/GetFiltersQuery";

export const useGenerateQueries = ({
  api,
  keys,
  apiEndpoint,
  filterName,
  filtersEndPoint,
  onError,
  disabled
}) => {
  const { newsApiAxios, guardianApiAxios } = useAxios();
  const filters = useStore((state) => state.filters[filterName]);
  let link = apiEndpoint;
  const separator = apiEndpoint.includes("?") ? "&" : "?";

  if (filters) {
    const filterQuery = getFiltersQuery(filters);
    if (filterQuery && filterQuery !== "") {
      link = (filtersEndPoint || apiEndpoint) + separator + filterQuery;
    }
  }

  const queryKey = [...keys];
  if (filterName) queryKey.push(filters);


  return useQuery({
    queryKey: queryKey,
    queryFn:
      async () => {
        try {
          if (api == "guardian") {
            const { data } = await guardianApiAxios.get(link);
            return data.response.results;
          } else {
            const { data } = await newsApiAxios.get(link);
            return data.articles;
          }

        } catch (error) {
          if (onError) {
            onError(error);
          } else {
            console.log(error.response);
          }
        }
      },
    enabled: !disabled,
  });
};
