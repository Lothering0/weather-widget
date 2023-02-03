import {
  compose,
  stringifyObjectValues,
  makeQueryURL,
  clearObject
} from "@/functions";
import { FetchWeatherParams } from "@/types/OpenWeatherApi";
import { Coords } from "@/types/browserApi";
import { getCurrentCoords } from "../browser";
import { config } from "./config";

const { PATH, APPID: appid } = config;

const generateUri = (params: FetchWeatherParams, { lat, lon }: Coords): string => {
  let uri = PATH;

  const defineParams = compose<Record<string, any>, Record<string, string>>(
    makeQueryURL,
    stringifyObjectValues,
    clearObject
  );
  const queryParams = defineParams({ ...params, appid, lat, lon });

  return uri += queryParams;
};

export const fetchWeather = async (
  params: FetchWeatherParams
): Promise<void> => {
  try {
    const coords = await getCurrentCoords();
    const uri = generateUri(params, coords);
    const data = await fetch(uri);
    console.log(data);
    // await fetch(`${uri}?lat={lat}&lon={lon}&appid={API key}`);
  } catch (error) {}
};
