<template>
  <div class="weather-widget">
    <Loader v-if="loading" />
    <WeatherWidgetList v-else :weathers="weathers" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader } from "@/UI";
import { fetchWeather } from "@/api/OpenWeather";
import { LanguageCode, UnitsOfMeasurement } from "@/types/OpenWeatherApi";
import { CitiesStore } from "@/store";
import { Maybe } from "@/types/common";
import { OpenWeatherResponse } from "@/types/OpenWeatherApi";
import WeatherWidgetList from "./WeatherWidgetList.vue";

const { lang, units = UnitsOfMeasurement.METRIC } = defineProps<{
  readonly lang?: LanguageCode;
  readonly units?: UnitsOfMeasurement;
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

<style scoped lang="scss">
.weather-widget {
  padding: 10px;
  border: 1px solid;
}
</style>
