import { id } from "../common";

export interface WeatherInfo {
  readonly description: string;
  readonly icon: string;
  readonly id: id;
  readonly main: string;
}