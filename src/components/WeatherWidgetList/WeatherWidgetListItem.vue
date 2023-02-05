<template>
  <div class="weather-widget__list-item">
    <div>City: {{ city }}, {{ country }}</div>
    <div>Temperature: {{ temperature }}</div>
    <div>Feels like: {{ feelsLike }}</div>
    <div>Clouds: {{ clouds }}</div>
    <div>Humidity: {{ humidity }}</div>
    <div>Dew point: {{ dewPoint }}</div>
    <div>Pressure: {{ pressure }}</div>
    <div>Visibility: {{ visibility }}</div>
    <div>Wind speed: {{ windSpeed }}</div>
    <div>Wind direction: {{ windDirection }}</div>
  </div>
</template>

<script setup lang="ts">
import { OpenWeatherResponse } from "@/types/OpenWeatherApi";
import { getDewPoint, getWindDirection } from "./helpers";

const { weather } = defineProps<{
  readonly weather: OpenWeatherResponse;
}>();

const celsium = "°C";

const city = weather.name;
const country = weather.sys.country;
const temperature = weather.main.temp.toFixed(0) + celsium;
const feelsLike = weather.main.feels_like.toFixed(0) + celsium;
const clouds = weather.weather[0].main;
const humidity = weather.main.humidity + "%";
const dewPoint = getDewPoint(weather.main.temp, weather.main.humidity);
const pressure = weather.main.pressure + "hPa";
const visibility = (weather.visibility / 1000).toFixed(1) + "km";
const windSpeed = weather.wind.speed + "m/s";
const windDirection = getWindDirection(weather.wind.deg);
</script>

<style scoped lang="scss">
.weather-widget__list-item {
  padding: 10px 20px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  color: #222;
  line-height: 28px;

  & + & {
    margin-top: 10px;
  }
}
</style>
