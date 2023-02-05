<template>
  <div class="ww-input-form">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: false
  },
  modelValue: {
    type: String,
    required: true
  }
});
defineEmits(["update:modelValue"]);
</script>

<style lang="scss">
.ww-input-form {
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
  }
}
</style>
