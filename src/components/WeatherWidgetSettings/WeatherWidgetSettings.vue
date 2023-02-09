<template>
  <div class="weather-widget__settings">
    <WeatherWidgetSettingsList />
    <WeatherWidgetSettingsForm />
  </div>
</template>

<script setup lang="ts">
import WeatherWidgetSettingsList from "./WeatherWidgetSettingsList.vue";
import WeatherWidgetSettingsForm from "./WeatherWidgetSettingsForm.vue";
</script>
