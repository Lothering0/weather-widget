<template>
  <Form @submit="addCityToStore" class="weather-widget__settings-form">
    <Input
      v-model="value"
      id="city-name-input"
      label="Add location"
    />
    <EnterButton :disabled="isButtonDisabled" />
  </Form>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { EnterButton, Form, Input } from "@/UI";
import { CitiesStore, NotificationsStore } from "@/store";

const value = ref("");
const cities = CitiesStore.cities;

const isButtonDisabled = computed(() => {
  NotificationsStore.setWarnings([]);
  if (!value.value.length) return true;
  if (!cities.value) return false;

  const isIncludes = cities.value.includes(value.value);
  if (!isIncludes) return false;

  NotificationsStore.setWarnings([`City ${value.value} is already exist!`]);
  return true;
});

const addCityToStore = () => {
  CitiesStore.push(value.value);
  value.value = "";
};
</script>

<style lang="scss">
.weather-widget__settings-form {
  display: flex;
  align-items: flex-end;
}
</style>
