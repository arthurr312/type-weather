import { useQuery } from "react-query";
import { api_access_key } from "@/utils/api-access-key";
import axios from "axios";

export function useSearchCityWeather(city: string) {
  const fetchData = async () => {
    const params = {
      access_key: api_access_key,
      query: city,
    };
    const response = await axios.get(`http://api.weatherstack.com/current`, {
      params,
    });
    return response.data;
  };
  const query = useQuery({
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!city,
    queryFn: fetchData,
    queryKey: ["city-weather-data"],
  });

  return query;
}
