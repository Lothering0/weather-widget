import { Coords } from "../browserApi";
import { Clouds } from "./Clouds";
import { OpenWeatherSys } from "./OpenWeatherSys";
import { Wind } from "./Wind";
import { MainInfo } from "./MainInfo";
import { WeatherInfo } from "./WeatherInfo";

export interface OpenWeatherResponse {
  readonly base: "stations";
  readonly clouds: Clouds;
  readonly cod: 200;
  readonly coords: Coords;
  readonly dt: number;
  readonly id: number;
  readonly main: MainInfo;
  readonly name: string;
  readonly sys: OpenWeatherSys;
  readonly timezone: number;
  readonly visibility: number;
  readonly weather: WeatherInfo[];
  readonly wind: Wind;
}