<template>
  <Loader v-if="isLoading" />
  <div class="weather-widget__list" v-else>
    <Title>Weather</Title>
    <WeatherWidgetItem
      v-for="weather, index in weathers"
      :weather="weather"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader, Title } from "@/UI";
import { WeathersStore } from "@/store";
import { Maybe } from "@/types/common";
import {
  OpenWeatherResponse,
  LanguageCode,
  UnitsOfMeasurement
} from "@/types/OpenWeatherApi";
import WeatherWidgetItem from "./WeatherWidgetItem.vue";

const { lang, units } = defineProps<{
  readonly lang: LanguageCode;
  readonly units: UnitsOfMeasurement;
}>();

const isLoading = WeathersStore.isLoading;
const weathers = WeathersStore.weathers;

onMounted(async () => WeathersStore.fetch({ lang, units }));
</script>
