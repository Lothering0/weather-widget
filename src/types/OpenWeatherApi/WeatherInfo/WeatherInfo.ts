import { WeatherInfoId } from "./WeatherInfoId";
import { WeatherInfoDescription } from "./WeatherInfoDescription";
import { WeatherInfoIcon } from "./WeatherInfoIcon";
import { WeatherInfoMain } from "./WeatherInfoMain";

export interface WeatherInfo {
  readonly icon: WeatherInfoIcon;
  readonly id: WeatherInfoId;
  readonly main: WeatherInfoMain;
  readonly description: WeatherInfoDescription;
}
