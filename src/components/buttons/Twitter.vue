<script setup>
console.log('Twitter')
</script>

<template>
  <button class="btn grid w-full grid-cols-4 normal-case shadow">
    <img src="img/twitter.png" class="w-10 h-10" alt="twitter logo" />
    <span class="col-span-2">ログイン with Twitter</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  background: #1d9bf0;
  border: #1d9bf0;

  &:hover {
    background: #1d9bf0;
    opacity: 0.8;
  }
}
</style>
