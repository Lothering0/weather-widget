<template>
  <button class="ww-button"><slot /></button>
</template>

<style scoped lang="scss">
.ww-button {
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
