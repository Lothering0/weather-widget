<template>
  <div class="weather-widget__settings">
    <Title>Settings</Title>
    <WeatherWidgetSettingsList />
    <WeatherWidgetSettingsForm />
  </div>
</template>

<script setup lang="ts">
import { Title } from "@/UI";
import WeatherWidgetSettingsList from "./WeatherWidgetSettingsList.vue";
import WeatherWidgetSettingsForm from "./WeatherWidgetSettingsForm.vue";
</script>
