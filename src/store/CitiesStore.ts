import { compose, removeDuplicates } from "@/functions";
import { city } from "@/types/browserApi";
import { Maybe } from "@/types/common";

export class CitiesStore {
  private static _KEY = "cities";

  public static getCities(): Maybe<city[]> {
    const citiesItem = localStorage.getItem(CitiesStore._KEY);

    if (!citiesItem) return null;

    const cities = JSON.parse(citiesItem);
    return cities;
  }

  public static setCitiesIfStoreIsEmpty(city: city): city[] {
    const cities = CitiesStore.getCities();

    if (cities) return cities;

    return CitiesStore._setCities([city]);
  }

  private static _setCities(cities: city[]): city[] {
    const stringified = JSON.stringify(cities);
    localStorage.setItem(CitiesStore._KEY, stringified);

    return cities;
  }

  public static push(city: city): city[] {
    const push = compose(CitiesStore._setCities, removeDuplicates);
    const cities = CitiesStore.getCities();

    if (!cities) return CitiesStore.setCitiesIfStoreIsEmpty(city);

    return push([...cities, city]);
  }

  public static remove(city: city): Maybe<city[]> {
    const cities = CitiesStore.getCities();

    if (!cities) return cities;

    const filtered = cities.filter((item) => item !== city);

    return CitiesStore._setCities(filtered);
  }
}