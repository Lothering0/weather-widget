<template>
  <Button class="ww-drag-button">
    <div class="ww-drag-button__line"></div>
    <div class="ww-drag-button__line"></div>
    <div class="ww-drag-button__line"></div>
  </Button>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
</script>

<style setup lang="scss">
.ww-button.ww-drag-button {
  cursor: grab;
}

.ww-drag-button {
  &__line {
    width: 20px;
    height: 2px;

    background: currentColor;
    user-select: none;

    & + & {
      margin-top: 3px;
    }
  }
}
</style>
