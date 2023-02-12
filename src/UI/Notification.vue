<template>
  <Card :class="classes">{{ value }}</Card>
</template>

<script setup lang="ts">
import Card from "./Card.vue";

const props = defineProps<{
  readonly value: string;
  readonly type: "warning" | "error";
}>();

const classes = ["ww-notification", `ww-notification--${props.type}`];
</script>

<style lang="scss">
.ww-notification {
  &--warning {
    @include bg(#fcd34d, #b79832);

    color: #a16207;
  }

  &--error {
    @include bg(#d98686, #cc4242);

    color: #860808;
  }
}
</style>
