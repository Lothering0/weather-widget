import { generateUri } from "./generateUri";
import { NotificationsStore } from "@/store";
import { FetchResult } from "@/types/common";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";
import { Coords, city } from "@/types/browserApi";

export const getResponses = (
  params: FetchWeatherParams,
  positions: Coords[] | city[]
): Promise<FetchResult<OpenWeatherResponse[]>> => {
  return new Promise(async (resolve, reject) => {
    if (!positions.length) return [];

    const response: OpenWeatherResponse[] = [];
    const errors: string[] = [];

    for (const position of positions) {
      const uri = generateUri(params, position);
      const data = await fetch(uri);
      const json = await data.json();

      if (json.cod == "404") {
        errors.push(`City "${position}" is not exist!`);
        continue;
      }

      response.push(json);
    }

    resolve({ response, errors });
  });
};
