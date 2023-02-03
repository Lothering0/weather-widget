<template>
  <div class="weather-widget">
    <h1>Weather here</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { fetchWeather } from "@/api/OpenWeather";
import { languageCode, unitsOfMeasurement } from "@/types/OpenWeatherApi";

const { lang, units } = defineProps<{
  readonly lang?: languageCode;
  readonly units?: unitsOfMeasurement
}>();

onMounted(() => {
  fetchWeather({ lang, units });
});
</script>

<style scoped lang="scss">
</style>
