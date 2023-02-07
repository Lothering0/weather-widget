import { UnionToIntersection } from "../../common";
import { WeatherInfoConditions } from "./WeatherInfoConditions";

export type WeatherInfoId = 
  keyof UnionToIntersection<WeatherInfoConditions[keyof WeatherInfoConditions]>;
