import { city } from "@/types/browserApi";
import { Maybe } from "@/types/common";

export class CitiesStore {
  private static _KEY = "cities";

  public static getCities(): Maybe<city[]> {
    const citiesItem = localStorage.getItem(CitiesStore._KEY);

    if (!citiesItem) {
      return null;
    }

    const cities = JSON.parse(citiesItem);
    return cities;
  }

  public static setCitiesIfStoreIsEmpty(city: city): [city] {
    const value: [city] = [city];
    const stringified = JSON.stringify(value);
    localStorage.setItem(this._KEY, stringified);

    return value;
  }
}