import { getPosition, getResponses } from "./helpers";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";

export const fetchWeather = async (
  params: FetchWeatherParams
): Promise<OpenWeatherResponse[]> => {
  const positions = await getPosition();
  if (!positions.length) return [];

  return getResponses(params, positions);
};
