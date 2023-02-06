import { generateUri } from "./generateUri";
import {
  FetchWeatherParams,
  OpenWeatherResponse
} from "@/types/OpenWeatherApi";
import { Coords, city } from "@/types/browserApi";

export const getPromises = (
  params: FetchWeatherParams,
  positions: Coords[] | city[]
): Promise<Promise<OpenWeatherResponse>[]> => new Promise((resolve, reject) => {
  if (!positions.length) return [];

  const promises: Promise<OpenWeatherResponse>[] = [];

  const forEachHandler = async (position: Coords | city, index: number) => {
    try {
      const uri = generateUri(params, position);
      const data = await fetch(uri);
      promises.push(data.json());

      const isLastElement = index === positions.length - 1;
      if (isLastElement) resolve(promises);
    } catch (error) {
      reject(error);
    }
  };

  positions.forEach(forEachHandler);
});