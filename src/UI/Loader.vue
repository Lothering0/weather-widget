<template>
  <div :style="styles" class="ww-loader"></div>
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
.ww-loader {
  margin: 0 auto;

  border: 10px solid;
  border-radius: 50%;

  animation: loading 0.7s ease-in-out infinite alternate-reverse;
}

@keyframes loading {
  from {
    border-color: #9026d9;
  }
  to {
    border-color: #3c26d9;
  }
}
</style>
