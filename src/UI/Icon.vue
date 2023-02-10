<template>
  <FontAwesomeIcon
    v-if="isFontAwesome"
    :class="classes"
    :icon="fontAwesomeIcon"
    :style="styles"
  />
  <div :class="classes" :style="styles" v-else></div>
</template>

<script setup lang="ts">
import { WeatherInfoIcon } from "@/types/OpenWeatherApi";

const { icon, width, height } = defineProps<{
  readonly icon: WeatherInfoIcon;
  readonly width: string;
  readonly height: string;
}>();

const styles = (width || height) ? {
  width: width || "auto",
  height: height || "auto"
} : {};

const isFontAwesome = !icon.startsWith("open-weather-icon");
const fontAwesomeIcon = `fa-solid fa-${icon}`;

const classes = {
  "ww-icon": true,
  [icon]: !isFontAwesome
};
</script>

<style scoped lang="scss">
@mixin icon-position($row, $column) {
  $rows: -87px -223px -361px -499px -638px;
  $columns: -63px -170px -273px -382px -488px;

  background-position: nth($columns, $column) nth($rows, $row);
}

.ww-icon {
  width: 60px;
  height: 60px;

  background-image: url("https://cdn.jsdelivr.net/gh/Lothering0/weather-widget@main/src/assets/icons/weather_icons.svg");
  background-repeat: no-repeat;

  &.#{$icon}-01d {
    @include icon-position(1, 1);
  }

  &.#{$icon}-01n {
    @include icon-position(1, 2);
  }

  &.#{$icon}-02d {
    @include icon-position(1, 3);
  }

  &.#{$icon}-02n {
    @include icon-position(2, 3);
  }

  &.#{$icon}-03d,
  &.#{$icon}-03n {
    @include icon-position(1, 5);
  }

  &.#{$icon}-04d,
  &.#{$icon}-04n {
    background-image: url("https://cdn.jsdelivr.net/gh/Lothering0/weather-widget@main/src/assets/icons/double_cloud.svg");
    background-position-y: center;
  }

  &.#{$icon}-09d,
  &.#{$icon}-09n {
    @include icon-position(2, 4);
  }

  &.#{$icon}-10d {
    @include icon-position(3, 1);
  }

  &.#{$icon}-10n {
    @include icon-position(4, 3);
  }

  &.#{$icon}-11d,
  &.#{$icon}-11n {
    @include icon-position(1, 4);
  }

  &.#{$icon}-13d,
  &.#{$icon}-13n {
    @include icon-position(5, 3);
  }

  &.#{$icon}-50d,
  &.#{$icon}-50n {
    @include icon-position(2, 5);
  }
}
</style>
