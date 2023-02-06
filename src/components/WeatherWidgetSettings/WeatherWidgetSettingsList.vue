<template>
  <div class="weather-widget__settings-list">
    <WeatherWidgetSettingsItem
      v-for="city in cities"
      :city="city"
      :key="city"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { CitiesStore } from "@/store";
import WeatherWidgetSettingsItem from "./WeatherWidgetSettingsItem.vue";

const cities = CitiesStore.cities;
</script>

<style scoped lang="scss">
.weather-widget__settings-list {
  margin-bottom: 10px;
}
</style>
