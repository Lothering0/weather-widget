import { getPosition, getPromises } from "./helpers";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";

export const fetchWeather = async (
  params: FetchWeatherParams
): Promise<OpenWeatherResponse[]> => {
  const positions = await getPosition();
  const promises: Promise<OpenWeatherResponse>[] = await getPromises(
    params,
    positions
  );

  return Promise.all<OpenWeatherResponse>(promises);
};
