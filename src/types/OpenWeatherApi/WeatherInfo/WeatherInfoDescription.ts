import { UnionToIntersection } from "../../common";
import { WeatherInfoConditions } from "./WeatherInfoConditions";
import { WeatherInfoId } from "./WeatherInfoId";

export type WeatherInfoDescription = UnionToIntersection<
  WeatherInfoConditions[keyof WeatherInfoConditions]
>[WeatherInfoId]["description"];
