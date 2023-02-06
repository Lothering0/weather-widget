<template>
  <div class="weather-widget__settings-list-item">
    <span>{{ city }}</span>
    <DeleteButton @click="removeCity">X</DeleteButton>
  </div>
</template>

<script setup lang="ts">
import { DeleteButton } from "@/UI";
import { CitiesStore } from "@/store";

const { city } = defineProps({
  city: {
    type: String,
    required: true
  }
});

const removeCity = () => CitiesStore.remove(city);
</script>

<style scoped lang="scss">
.weather-widget__settings-list-item {
  text-decoration: underline;
}
</style>
