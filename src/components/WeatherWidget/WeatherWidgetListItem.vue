<template>
  <div class="weather-widget__list-item">
    <div>City: {{ city }}</div>
    <div>Temperature: {{ temperature }}</div>
    <div>Feels like: {{ feelsLike }}</div>
    <div>Clouds: {{ clouds }}</div>
    <div>Humidity: {{ humidity }}</div>
    <div>Pressure: {{ pressure }}</div>
    <div>Visibility: {{ visibility }}</div>
    <div>Wind speed: {{ windSpeed }}</div>
    <div>Wind direction: {{ windDirection }}</div>
  </div>
</template>

<script setup lang="ts">
import { OpenWeatherResponse } from "@/types/OpenWeatherApi";
import { getWindDirection } from "./helpers";

const { weather } = defineProps<{
  readonly weather: OpenWeatherResponse;
}>();

const celsium = "°C";

const city = weather.name;
const temperature = weather.main.temp.toFixed(0) + celsium;
const feelsLike = weather.main.feels_like.toFixed(0) + celsium;
const clouds = weather.weather[0].description;
const humidity = weather.main.humidity + "%";
const pressure = weather.main.pressure + "hPa";
const visibility = (weather.visibility / 1000).toFixed(1) + "km";
const windSpeed = weather.wind.speed + "m/s";
const windDirection = getWindDirection(weather.wind.deg);
</script>

<style scoped lang="scss">
.weather-widget__list-item {
  padding: 10px 20px;

  background: black;
  border-radius: 10px;

  color: white;
  line-height: 28px;
}
</style>
