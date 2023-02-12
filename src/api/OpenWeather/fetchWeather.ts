import { getPosition, getResponses } from "./helpers";
import { FetchResult } from "@/types/common";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";

export const fetchWeather = async (
  params: FetchWeatherParams
): Promise<FetchResult<OpenWeatherResponse[]>> => {
  const positions = await getPosition();
  if (!positions.length) return {
    errors: [],
    response: []
  };

  return getResponses(params, positions);
};
