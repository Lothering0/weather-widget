<template>
  <div class="ww-card">
    <slot />
  </div>
</template>

<style lang="scss">
.ww-card {
  padding: 10px 18px;

  border-radius: 10px;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.25);

  color: white;
  line-height: 28px;

  & + & {
    margin-top: 10px;
  }

  section + section {
    margin-top: 22px;
  }
}
</style>
