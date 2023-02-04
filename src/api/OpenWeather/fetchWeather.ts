import {
  compose,
  stringifyObjectValues,
  makeQueryURL,
  clearObject
} from "@/functions";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";
import { Coords } from "@/types/browserApi";
import { getCurrentCoords } from "../browser";
import { config } from "./config";

const { PATH, APPID: appid } = config;

const generateUri = (params: FetchWeatherParams, coords: Coords): string => {
  let uri = PATH;

  const defineParams = compose<Record<string, any>, Record<string, string>>(
    makeQueryURL,
    stringifyObjectValues,
    clearObject
  );
  const queryParams = defineParams({ ...params, ...coords, appid });

  return uri += queryParams;
};

export const fetchWeather = async (
  params: FetchWeatherParams
): Promise<OpenWeatherResponse> => {
  const coords = await getCurrentCoords();
  const uri = generateUri(params, coords);
  const data = await fetch(uri);
  return data.json();
};
