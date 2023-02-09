<template>
  <li class="weather-widget-secondary__item"><slot /></li>
</template>

<style scoped lang="scss">
.weather-widget-secondary__item {
  line-height: 21px;
  letter-spacing: 0.4px;

  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
