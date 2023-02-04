<template>
  <div class="weather-widget__list">
    <WeatherWidgetListItem
      v-for="weather, index in weathers"
      :weather="weather"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import WeatherWidgetListItem from "./WeatherWidgetListItem.vue";

defineProps({
  weathers: {
    type: Array,
    required: true
  }
});
</script>
