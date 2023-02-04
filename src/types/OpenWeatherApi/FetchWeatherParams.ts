import { LanguageCode } from "./LanguageCode";
import { unitsOfMeasurement } from "./unitsOfMeasurement";

export interface FetchWeatherParams {
  readonly lang?: LanguageCode;
  readonly units?: unitsOfMeasurement;
}
