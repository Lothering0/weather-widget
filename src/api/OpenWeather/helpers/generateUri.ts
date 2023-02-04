import {
  compose,
  stringifyObjectValues,
  makeQueryURL,
  clearObject
} from "@/functions";
import { config } from "../config";
import { FetchWeatherParams } from "@/types/OpenWeatherApi";
import { Coords, city } from "@/types/browserApi";

const { PATH, APPID: appid } = config;

const defineParams = compose<Record<string, any>, Record<string, string>>(
  makeQueryURL,
  stringifyObjectValues,
  clearObject
);

export function generateUri(
  params: FetchWeatherParams,
  coordsOrCity: Coords | city
): string {
  let uri = PATH;

  const fetchParams: FetchWeatherParams = { ...params, appid };

  if (typeof coordsOrCity === "string") {
    const city = coordsOrCity;
    fetchParams.q = city;
  } else {
    const coords = coordsOrCity;
    fetchParams.lon = coords.lon;
    fetchParams.lat = coords.lat;
  }

  const queryParams = defineParams(fetchParams);

  return uri += queryParams;
};
