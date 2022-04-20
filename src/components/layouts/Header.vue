<template>
  <header class="grid grid-cols-2">
    <div class="p-3 flex justify-start items-center">アプリ名</div>
    <div class="p-3 flex justify-start items-center">
      <a href="#">
        <i class="bi bi-plus-square text-2xl"></i>
      </a>
      <a href="#">
        <i class="bi bi-list text-3xl"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
}
</script>
