<template>
  <div class="weather-widget__settings-list">
    <draggable handle=".ww-drag-button" :list="cities" @update="onUpdate">
      <template #item="{ element }">
        <WeatherWidgetSettingsItem :city="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { CitiesStore } from "@/store";
import draggable from "vuedraggable";
import WeatherWidgetSettingsItem from "./WeatherWidgetSettingsItem.vue";

const cities = CitiesStore.cities;

const onUpdate = () => {
  if (!cities.value) return;

  CitiesStore.setCities(cities.value);
};
</script>

<style scoped lang="scss">
.weather-widget__settings-list {
  margin-bottom: 20px;
}
</style>
