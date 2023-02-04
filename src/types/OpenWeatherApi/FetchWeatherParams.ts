import { id } from "../common";
import { LanguageCode } from "./LanguageCode";
import { UnitsOfMeasurement } from "./UnitsOfMeasurement";

export interface FetchWeatherParams {
  readonly lang?: LanguageCode;
  readonly units?: UnitsOfMeasurement;
  readonly appid?: id;
  lon?: number;
  lat?: number;
  q?: string;
}
