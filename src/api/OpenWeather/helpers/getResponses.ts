import { generateUri } from "./generateUri";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";
import { Coords, city } from "@/types/browserApi";

export const getResponses = (
  params: FetchWeatherParams,
  positions: Coords[] | city[]
): Promise<OpenWeatherResponse[]> => {
  return new Promise(async (resolve, reject) => {
    if (!positions.length) return [];

    const responses: OpenWeatherResponse[] = [];

    for (const position of positions) {
      const uri = generateUri(params, position);
      const data = await fetch(uri);
      const json = await data.json();
      responses.push(json);
    }

    resolve(responses);
  });
};
