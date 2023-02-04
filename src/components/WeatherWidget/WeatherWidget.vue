<template>
  <div class="weather-widget">
    <h1>Weather here</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { fetchWeather } from "@/api/OpenWeather";
import { LanguageCode, unitsOfMeasurement } from "@/types/OpenWeatherApi";

const { lang, units } = defineProps<{
  readonly lang?: LanguageCode;
  readonly units?: unitsOfMeasurement
}>();

onMounted(async () => {
  try {
    const data = await fetchWeather({ lang, units });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped lang="scss">
</style>
