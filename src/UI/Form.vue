<template>
  <form class="ww-form" ref="form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Maybe } from "@/types/common";

const emit = defineEmits(["submit"]);

/** It is used because by some reason @submit.prevent is not working */
const form = ref<Maybe<HTMLFormElement>>(null);

onMounted(() => {
  if (!form.value) return;

  form.value.addEventListener("submit", (event) => {
    event.preventDefault();
    emit("submit");
  });
});
</script>
