<template>
  <div :class="classes">
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

const classes = ["weather-widget-item", icon];
</script>

<style scoped lang="scss">
@mixin bg($first, $second) {
  background-image: linear-gradient($first 70%, $second 120%);
}

.weather-widget-item {
  padding: 10px 18px;

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

  &.#{$icon}-01d {
    @include bg(#5fbb76, #b5f032);
  }

  &.#{$icon}-01n {
    @include bg(#6ab57c, #215124);
  }

  &.#{$icon}-02d {
    @include bg(#66c0e3, #254b95);
  }

  &.#{$icon}-02n {
    @include bg(#438daa, #132342);
  }

  &.#{$icon}-03d {
    @include bg(#55bcc1, #9e72bd);
  }

  &.#{$icon}-03n {
    @include bg(#449b9f, #8c62aa);
  }

  &.#{$icon}-04d {
    @include bg(#8567c6, #425be6);
  }

  &.#{$icon}-04n {
    @include bg(#6c47bb, #2b3b91);
  }

  &.#{$icon}-09d {
    @include bg(#5f83bb, #4132f0);
  }

  &.#{$icon}-09n {
    @include bg(#4d6a97, #1a1282);
  }

  &.#{$icon}-10d {
    @include bg(#439cb7, #266bb5);
  }

  &.#{$icon}-10n {
    @include bg(#2f7388, #113760);
  }

  &.#{$icon}-11d {
    @include bg(#151620, #423a22);
  }

  &.#{$icon}-11n {
    @include bg(#151515, #4a3a09);
  }

  &.#{$icon}-13d {
    @include bg(#a2a2a2, #313131);
  }

  &.#{$icon}-13n {
    @include bg(#797979, #202020);
  }

  &.#{$icon}-50d {
    @include bg(#9897b5, #28514b);
  }

  &.#{$icon}-50n {
    @include bg(#68687d, #0e313c);
  }
}
</style>
