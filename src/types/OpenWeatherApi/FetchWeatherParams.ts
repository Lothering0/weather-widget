import { id } from "../common";
import { LanguageCode } from "./LanguageCode";
import { unitsOfMeasurement } from "./unitsOfMeasurement";

export interface FetchWeatherParams {
  readonly lang?: LanguageCode;
  readonly units?: unitsOfMeasurement;
  readonly appid?: id;
  lon?: number;
  lat?: number;
  q?: string;
}
