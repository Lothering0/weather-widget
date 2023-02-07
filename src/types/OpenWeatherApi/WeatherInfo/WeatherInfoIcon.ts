import { UnionToIntersection } from "../../common";
import { WeatherInfoConditions } from "./WeatherInfoConditions";
import { WeatherInfoId } from "./WeatherInfoId";

export type WeatherInfoIcon = UnionToIntersection<
  WeatherInfoConditions[keyof WeatherInfoConditions]
>[WeatherInfoId]["icon"];
