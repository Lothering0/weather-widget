<template>
  <header class="weather-widget__header">
    <SettingsButton
      class="weather-widget__settings-button"
      :activated="activated"
      @click="switchPanel"
    />
  </header>
</template>

<script setup lang="ts">
import { SettingsButton } from "@/UI";

defineProps({
  activated: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(["switchPanel"]);

const switchPanel = () => emit("switchPanel");
</script>

<style scoped lang="scss">
.weather-widget__header {
  display: flex;
  justify-content: flex-end;

  margin-bottom: 10px;
}
</style>
