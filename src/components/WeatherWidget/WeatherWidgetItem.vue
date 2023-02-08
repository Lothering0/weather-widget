<template>
  <div class="weather-widget-item">
    <div class="weather-widget-item__main">
      <div class="weather-widget-item__temperature">
        <Icon :icon="icon" />
        <div class="weather-widget-item__temperature-value">{{ temperature }}</div>
      </div>
      <ul class="weather-widget-item__secondary">
        <li class="weather-widget-item__secondary-item">Feels like: {{ feelsLike }}</li>
        <li class="weather-widget-item__secondary-item">{{ clouds }}</li>
        <li class="weather-widget-item__secondary-item">{{ description }}</li>
      </ul>
    </div>
    <ul class="weather-widget-item__info">
      <li class="weather-widget-item__info-item">Humidity: {{ humidity }}</li>
      <li class="weather-widget-item__info-item">Dew point: {{ dewPoint }}</li>
      <li class="weather-widget-item__info-item">Pressure: {{ pressure }}</li>
      <li class="weather-widget-item__info-item">Visibility: {{ visibility }}</li>
      <li class="weather-widget-item__info-item">Wind speed: {{ windSpeed }}</li>
      <li class="weather-widget-item__info-item">Wind direction: {{ windDirection }}</li>
    </ul>
    <div class="weather-widget-item__position">{{ city }}, {{ country }}</div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@/UI";
import { OpenWeatherResponse } from "@/types/OpenWeatherApi";
import {
  getDewPoint,
  getHumidity,
  getIcon,
  getPressure,
  getTemperature,
  getVisibility,
  getWindDirection,
  getWindSpeed
} from "./helpers";

const { weather } = defineProps<{
  readonly weather: OpenWeatherResponse;
}>();

const icon = getIcon(weather.weather[0].icon);
const city = weather.name;
const country = weather.sys.country;
const temperature = getTemperature(weather.main.temp);
const feelsLike = getTemperature(weather.main.feels_like);
const clouds = weather.weather[0].main;
const description = weather.weather[0].description;
const humidity = getHumidity(weather.main.humidity);
const dewPoint = getDewPoint(weather.main.temp, weather.main.humidity);
const pressure = getPressure(weather.main.pressure);
const visibility = getVisibility(weather.visibility);
const windSpeed = getWindSpeed(weather.wind.speed);
const windDirection = getWindDirection(weather.wind.deg);
</script>

<style scoped lang="scss">
.weather-widget-item {
  padding: 10px 18px;

  background-image: linear-gradient(#6c47bb 70%, #2b3b91 120%);
  border-radius: 10px;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.25);

  color: white;
  line-height: 28px;

  & + & {
    margin-top: 10px;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    & > * {
      text-align: right;
    }
  }

  &__temperature {
    display: flex;
    align-items: center;

    &-value {
      margin-left: 10px;
      font-size: 30px;
    }
  }

  &__secondary {
    &-item {
      line-height: 21px;
      letter-spacing: 0.4px;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  &__position {
    font-size: 20px;
    font-weight: 700;
  }

  &__description {
    text-transform: capitalize;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    &-item {
      width: 50%;
      font-size: 15px;
      line-height: 19px;

      &:nth-child(2n) {
        text-align: right;
      }
    }
  }
}
</style>
