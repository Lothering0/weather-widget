<template>
  <div :style="styles" class="loader"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { makeCssValue as m } from "@/functions";
import { CssAbsoluteUnit } from "@/types/common";

const { size } = defineProps({
  size: {
    default: 40,
    type: Number,
    required: false
  }
});

const styles = computed(() => ({
  width: m(size, CssAbsoluteUnit.PX),
  height: m(size, CssAbsoluteUnit.PX)
}));
</script>

<style scoped lang="scss">
.loader {
  border: 10px solid magenta;
  border-radius: 50%;

  animation: loading 0.5s ease-in-out infinite alternate-reverse;
}

@keyframes loading {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
