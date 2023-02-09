<template>
  <li class="weather-widget-item__info-item" :title="title">
    <Icon :icon="icon" width="16px" />
    <span><slot /></span>
  </li>
</template>

<script setup lang="ts">
import { Icon } from "@/UI";

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
.weather-widget-item__info-item {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;

  width: calc(50% - 15px);
  margin-bottom: 5px;

  font-size: 18px;
  line-height: 19px;

  cursor: pointer;

  .ww-icon {
    margin-left: 10px;
  }

  &:nth-child(2n) {
    flex-direction: row;
    justify-content: flex-start;

    .ww-icon {
      margin-left: 0;
      margin-right: 10px;
    }
  }
}
</style>
