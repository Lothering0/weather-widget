import { ref } from "vue";
import { WeathersStore } from "./WeathersStore";
import { compose, removeDuplicates } from "@/functions";
import { city } from "@/types/browserApi";
import { Maybe } from "@/types/common";

export class CitiesStore {
  private static readonly _KEY = "ww-cities";

  public static readonly cities = ref<Maybe<city[]>>(CitiesStore._getCities());

  private static _refreshCities(): void {
    CitiesStore.cities.value = CitiesStore._getCities();
  }

  private static _getCities(): Maybe<city[]> {
    const citiesItem = localStorage.getItem(CitiesStore._KEY);

    if (!citiesItem) return null;

    const cities = JSON.parse(citiesItem);
    return cities;
  }

  public static setCitiesIfStoreIsEmpty(city: city): city[] {
    const cities = CitiesStore.cities.value;

    if (cities) return cities;

    return CitiesStore.setCities([city]);
  }

  public static setCities(cities: city[]): city[] {
    const stringified = JSON.stringify(cities);
    localStorage.setItem(CitiesStore._KEY, stringified);
    CitiesStore._refreshCities();
    WeathersStore.refresh();

    return cities;
  }

  public static push(city: city): city[] {
    const push = compose(CitiesStore.setCities, removeDuplicates);
    const cities = CitiesStore.cities.value;

    if (!cities) return CitiesStore.setCitiesIfStoreIsEmpty(city);

    const value = [...cities, city];
    return push(value);
  }

  public static remove(city: city): Maybe<city[]> {
    const cities = CitiesStore.cities.value;

    if (!cities) return cities;

    const filtered = cities.filter((item) => item !== city);

    return CitiesStore.setCities(filtered);
  }
}