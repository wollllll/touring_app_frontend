<script setup>
console.log('Primary')
</script>

<template>
  <button
    type="button"
    class="btn btn-primary hover:opacity-75 primary-text-color w-full shadow"
  >
    <slot />
  </button>
</template>
