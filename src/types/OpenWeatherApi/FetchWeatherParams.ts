import { languageCode } from "./languageCode";
import { unitsOfMeasurement } from "./unitsOfMeasurement";

export interface FetchWeatherParams {
  readonly lang?: languageCode;
  readonly units?: unitsOfMeasurement;
}