<template>
  <div class="weather-widget">
    <h1>Weather here</h1>
    <Loader v-if="loading" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader } from "@/UI";
import { fetchWeather } from "@/api/OpenWeather";
import { LanguageCode, UnitsOfMeasurement } from "@/types/OpenWeatherApi";
import { CitiesStore } from "@/store";

const { lang, units = UnitsOfMeasurement.METRIC } = defineProps<{
  readonly lang?: LanguageCode;
  readonly units?: UnitsOfMeasurement;
}>();

const loading = ref(true);

onMounted(async () => {
  try {
    const data = await fetchWeather({ lang, units });

    CitiesStore.setCitiesIfStoreIsEmpty(data[0].name);
    console.log(data);
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
