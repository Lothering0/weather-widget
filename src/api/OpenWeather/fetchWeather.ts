import {
  compose,
  stringifyObjectValues,
  makeQueryURL,
  clearObject
} from "@/functions";
import { FetchWeatherParams } from "@/types/OpenWeatherApi";

export const fetchWeather = async (params: FetchWeatherParams): Promise<void> => {
  let uri = "https://api.openweathermap.org/data/2.5/weather?";
  const defineParams = compose<Record<string, any>, Record<string, string>>(
    makeQueryURL,
    stringifyObjectValues,
    clearObject
  );

  const queryParams = defineParams(params);
  uri += queryParams;

  await fetch(uri);
  // await fetch(`${uri}?lat={lat}&lon={lon}&appid={API key}`);
};
