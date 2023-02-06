<template>
  <Form @submit="addCityToStore" class="weather-widget__settings-form">
    <Input v-model="value" id="city-name-input" label="Add location" />
    <EnterButton :disabled="!value.length" />
  </Form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EnterButton, Form, Input } from "@/UI";
import { CitiesStore } from "@/store";

const value = ref("");

const addCityToStore = () => {
  CitiesStore.push(value.value);
  value.value = "";
};
</script>

<style scoped lang="scss">
.weather-widget__settings-form {
  display: flex;
  align-items: flex-end;
}
</style>
