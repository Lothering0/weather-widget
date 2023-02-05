<template>
  <Loader v-if="loading" />
  <div class="weather-widget__list" v-else>
    <Title>Weather</Title>
    <WeatherWidgetListItem
      v-for="weather, index in weathers"
      :weather="weather"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader, Title } from "@/UI";
import { fetchWeather } from "@/api/OpenWeather";
import { CitiesStore } from "@/store";
import { Maybe } from "@/types/common";
import {
  OpenWeatherResponse,
  LanguageCode,
  UnitsOfMeasurement
} from "@/types/OpenWeatherApi";
import WeatherWidgetListItem from "./WeatherWidgetListItem.vue";

const { lang, units } = defineProps<{
  readonly lang: LanguageCode;
  readonly units: UnitsOfMeasurement;
}>();

const loading = ref(true);
const weathers = ref<Maybe<OpenWeatherResponse[]>>(null);

onMounted(async () => {
  try {
    const data = await fetchWeather({ lang, units });

    CitiesStore.setCitiesIfStoreIsEmpty(data[0].name);
    weathers.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
