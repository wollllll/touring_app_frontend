<script setup>
console.log('Google')
</script>

<template>
  <button class="btn grid w-full grid-cols-4 normal-case shadow">
    <img src="img/google.png" class="w-7 h-7 ml-1" alt="google logo" />
    <span class="col-span-2 text-current">ログイン with Google</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border: #ffffff;
  background: #ffffff;
  color: #1f2937;

  &:hover {
    background: #ffffff;
    opacity: 0.8;
  }
}
</style>
