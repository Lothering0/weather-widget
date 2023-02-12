<template>
  <Loader v-if="isLoading" />
  <div class="weather-widget__list" v-else>
    <WeatherWidgetItem
      v-for="weather, index in weathers"
      :weather="weather"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { Loader } from "@/UI";
import { CitiesStore, WeathersStore } from "@/store";
import { LanguageCode, UnitsOfMeasurement } from "@/types/OpenWeatherApi";
import WeatherWidgetItem from "./WeatherWidgetItem.vue";

const { lang, units } = defineProps<{
  readonly lang: LanguageCode;
  readonly units: UnitsOfMeasurement;
}>();

const isLoading = WeathersStore.isLoading;
const weathers = WeathersStore.weathers;
const cities = CitiesStore.cities;

watch(cities, () => WeathersStore.fetch({ lang, units }), { immediate: true });
</script>
