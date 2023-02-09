<template>
  <Card :class="classes">
    <section class="weather-widget-item__main">
      <div class="weather-widget-item__temperature">
        <Icon :icon="icon" />
        <div class="weather-widget-item__temperature-value">{{ temperature }}</div>
      </div>
      <WeatherWidgetSecondary>
        <WeatherWidgetSecondaryItem>Feels like: {{ feelsLike }}</WeatherWidgetSecondaryItem>
        <WeatherWidgetSecondaryItem>{{ clouds }}</WeatherWidgetSecondaryItem>
        <WeatherWidgetSecondaryItem>{{ description }}</WeatherWidgetSecondaryItem>
      </WeatherWidgetSecondary>
    </section>
    <section>
      <WeatherWidgetInfo>
        <WeatherWidgetInfoItem
          icon="droplet"
          title="Humidity"
        >{{ humidity }}</WeatherWidgetInfoItem>
        <WeatherWidgetInfoItem
          icon="arrow-down"
          title="Pressure"
        >{{ pressure }}</WeatherWidgetInfoItem>
        <WeatherWidgetInfoItem
          icon="location-arrow"
          title="Wind speed and direction"
        >{{ windSpeed }} {{ windDirection }}</WeatherWidgetInfoItem>
        <WeatherWidgetInfoItem
          icon="eye"
          title="Visibility"
        >{{ visibility }}</WeatherWidgetInfoItem>
        <WeatherWidgetInfoItem
          icon="temperature-low"
          title="Dew point"
        >{{ dewPoint }}</WeatherWidgetInfoItem>
      </WeatherWidgetInfo>
    </section>
    <section class="weather-widget-item__position">{{ city }}, {{ country }}</section>
  </Card>
</template>

<script setup lang="ts">
import { Card, Icon } from "@/UI";
import WeatherWidgetSecondary from "./WeatherWidgetSecondary.vue";
import WeatherWidgetSecondaryItem from "./WeatherWidgetSecondaryItem.vue";
import WeatherWidgetInfo from "./WeatherWidgetInfo.vue";
import WeatherWidgetInfoItem from "./WeatherWidgetInfoItem.vue";
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
.weather-widget-item {
  &__main {
    display: flex;
    justify-content: space-between;

    & > * {
      text-align: right;
    }
  }

  &__temperature {
    display: flex;
    align-items: center;
    font-weight: 600;

    &-value {
      margin-left: 10px;
      font-size: 30px;
    }
  }

  &__position {
    font-family: "Pacifico", cursive;
    font-size: 23px;
    font-weight: 500;
  }

  &__description {
    text-transform: capitalize;
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
