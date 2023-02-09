<template>
  <Button class="ww-settings-button">
    <Icon
      v-show="!activated"
      class="ww-settings-button__gear"
      width="20px"
      icon="gear"
    />
    <Icon v-show="activated" width="18px" icon="xmark" />
  </Button>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import Icon from "./Icon.vue";

defineProps({
  activated: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

<style scoped lang="scss">
.ww-settings-button {
  color: $gray;
  cursor: pointer;

  &__gear {
    @include transition;

    &:hover {
      transform: rotate(30deg);
    }
  }
}
</style>
