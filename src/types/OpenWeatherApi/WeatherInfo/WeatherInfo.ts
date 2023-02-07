import { WeatherInfoId } from "./WeatherInfoId";
import { WeatherInfoConditions } from "./WeatherInfoConditions";
import { WeatherInfoDescription } from "./WeatherInfoDescription";
import { WeatherInfoIcon } from "./WeatherInfoIcon";

export interface WeatherInfo {
  readonly icon: WeatherInfoIcon;
  readonly id: WeatherInfoId;
  readonly main: keyof WeatherInfoConditions;
  readonly description: WeatherInfoDescription;
}
