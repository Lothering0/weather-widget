<template>
  <div class="ww-notifications">
    <Notification
      v-for="error in filteredErrors"
      type="error"
      :value="error"
      :key="error"
    />
    <Notification
      v-for="warning in filteredWarnings"
      type="warning"
      :value="warning"
      :key="warning"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Notification from "./Notification.vue";
import { NotificationsStore } from "@/store";

const errors = NotificationsStore.errors;
const warnings = NotificationsStore.warnings;

const filteredErrors = computed(() => errors.filter(Boolean));
const filteredWarnings = computed(() => warnings.filter(Boolean));
</script>

<style lang="scss">
ww-notification {}
</style>
