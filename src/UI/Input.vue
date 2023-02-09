<template>
  <div class="ww-input-form">
    <input
      v-model="model"
      type="text"
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
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
const emit = defineEmits(["update:modelValue"]);

const model = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value) {
    return emit("update:modelValue");
  }
});

const labelClasses = computed(() => ({
  "ww-label--focused": model.value.length
}));
</script>

<style lang="scss">
$active: #a94ee8;
$inactive: #ccc;

.ww-input-form {
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;

  label {
    @include transition;
    position: absolute;
    left: 10px;
    bottom: 2px;

    color: $inactive;
    font-size: 15px;
    font-weight: 600;
  }

  input {
    @include transition;
    border-bottom: 2px solid $inactive;
    padding: 0 10px 2px;

    font-size: 15px;
    line-height: 15px;

    &:focus {
      border-bottom-color: $active;
    }
  }

  .ww-label--focused,
  input:focus + label {
    color: $active;
    transform: translateY(-24px);
  }
}
</style>
