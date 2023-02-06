import { ref } from "vue";
import { Maybe } from "@/types/common";
import { CitiesStore } from "./CitiesStore";
import {
  FetchWeatherParams,
  LanguageCode,
  OpenWeatherResponse,
  UnitsOfMeasurement
} from "@/types/OpenWeatherApi";
import { fetchWeather } from "@/api/OpenWeather";

export class WeathersStore {
  private static _lastFetchParams: Maybe<FetchWeatherParams> = null;

  public static readonly isLoading = ref(false);

  public static readonly weathers = ref<Maybe<OpenWeatherResponse[]>>(null);

  public static async fetch(params: FetchWeatherParams): Promise<void> {
    try {
      WeathersStore.isLoading.value = true;
      WeathersStore._lastFetchParams = params;
      const response = await fetchWeather(params);

      CitiesStore.setCitiesIfStoreIsEmpty(response[0].name);
      WeathersStore.weathers.value = response;
    } catch (error) {
      console.error(error);
    } finally {
      WeathersStore.isLoading.value = false;
    }
  }

  public static async refresh(): Promise<void> {
    if (!WeathersStore._lastFetchParams) return;

    WeathersStore.fetch(WeathersStore._lastFetchParams);
  }
}
