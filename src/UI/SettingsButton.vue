<template>
  <Button class="ww-settings-button">
    <span v-show="!activated">Settings</span>
    <span v-show="activated">Close</span>
  </Button>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

defineProps({
  activated: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

<style scoped lang="scss">
.ww-settings-button {
  cursor: pointer;
}
</style>
