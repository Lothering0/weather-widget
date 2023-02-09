<template>
  <ul class="weather-widget-item__info">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
.weather-widget-item__info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
