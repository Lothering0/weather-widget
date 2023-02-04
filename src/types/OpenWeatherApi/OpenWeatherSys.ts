import { id } from "../common";

export interface OpenWeatherSys {
  readonly country: string;
  readonly id: id;
  readonly sunrise: number;
  readonly sunset: number;
  readonly type: number;
}
