<script setup>
console.log('Line')
</script>

<template>
  <button class="btn btn-line grid w-full grid-cols-4 normal-case shadow">
    <img src="img/line.png" class="w-10 h-10" alt="line logo"/>
    <span class="col-span-2">ログイン with LINE</span>
  </button>
</template>

<style lang="scss">
.btn-line {
  background: #06c655;
  border: #06c655;

  &:hover {
    background: #06c655;
    opacity: 0.8;
  }
}
</style>
