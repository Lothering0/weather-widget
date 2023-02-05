<template>
  <div class="weather-widget">
    <SettingsButton
      class="weather-widget__settings-button"
      :activated="showSettings"
      @click="switchPanel"
    />
    <WeatherWidgetList v-show="!showSettings" :lang="lang" :units="units" />
    <WeatherWidgetSettings v-show="showSettings" />
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from "vue";
import { SettingsButton } from "@/UI";
import { WeatherWidgetList } from "../WeatherWidgetList";
import { WeatherWidgetSettings } from "../WeatherWidgetSettings";
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

  padding: 10px;
  border: 1px solid;

  &__settings-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
