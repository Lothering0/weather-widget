<template>
  <Card class="weather-widget__settings-item">
    <DragButton />
    <span>{{ city }}</span>
    <DeleteButton @click="removeCity" />
  </Card>
</template>

<script setup lang="ts">
import { Card, DeleteButton, DragButton } from "@/UI";
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
.weather-widget__settings-item {
  @include bg(#a94ee8, #796dd2);
  display: flex;
  font-weight: 600;

  .ww-drag-button {
    margin-right: 20px;
  }

  .ww-delete-button {
    margin-left: auto;
  }
}
</style>
