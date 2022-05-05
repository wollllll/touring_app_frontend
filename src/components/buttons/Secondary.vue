<script>
console.log('secondary')
</script>

<template>
  <button class="btn btn-secondary w-full shadow">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  color: #1f2937;

  &:hover {
    opacity: 0.8;
  }
}
</style>
