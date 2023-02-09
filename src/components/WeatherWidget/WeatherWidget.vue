<template>
  <div class="weather-widget">
    <WeatherWidgetHeader
      :activated="showSettings"
      @switchPanel="switchPanel"
    />
    <WeatherWidgetList v-show="!showSettings" :lang="lang" :units="units" />
    <WeatherWidgetSettings v-show="showSettings" />
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from "vue";
import { WeatherWidgetSettings } from "../WeatherWidgetSettings";
import WeatherWidgetHeader from "./WeatherWidgetHeader.vue";
import WeatherWidgetList from "./WeatherWidgetList.vue";
import { LanguageCode, UnitsOfMeasurement } from "@/types/OpenWeatherApi";

const showSettings = ref(false);
const switchPanel = () => (showSettings.value = !showSettings.value);

withDefaults(defineProps<{
  readonly lang?: LanguageCode;
  readonly units?: UnitsOfMeasurement;
}>(), {
  units: UnitsOfMeasurement.METRIC
});
</script>

<style scoped lang="scss">
.weather-widget {
  position: relative;

  width: 370px;
  padding: 10px;
}
</style>
