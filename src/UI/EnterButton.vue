<template>
  <Button type="submit" class="ww-enter-button">
    <Icon icon="circle-plus" width="20px" height="20px" />
  </Button>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import Icon from "./Icon.vue";
</script>

<style scoped lang="scss">
.ww-enter-button {
  @include transition;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  color: $gray;
}
</style>
