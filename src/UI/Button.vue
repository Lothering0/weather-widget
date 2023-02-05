<template>
  <button class="ww-button"><slot /></button>
</template>

<style scoped lang="scss">
.ww-button {
  cursor: pointer;
  transition: 0.3s ease;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
