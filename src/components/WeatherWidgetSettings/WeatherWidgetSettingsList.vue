<template>
  <div class="weather-widget__settings-list">
    <WeatherWidgetSettingsListItem
      v-for="city in cities"
      :city="city"
      :key="city"
    />
  </div>
</template>

<script setup lang="ts">
import { CitiesStore } from "@/store";
import WeatherWidgetSettingsListItem from "./WeatherWidgetSettingsListItem.vue";

const cities = CitiesStore.getCities();
</script>

<style scoped lang="scss">
.weather-widget__settings-list {
  margin-bottom: 10px;
}
</style>
