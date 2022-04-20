<template>
  <header class="grid grid-cols-2 bg-blue-400">
    <div class="p-3 flex justify-start items-center">
      <router-link :to="{ name: 'top' }">アプリ名</router-link>
    </div>
    <div class="p-3 flex justify-end items-center">
      <router-link :to="{ name: 'top' }">
        <i class="bi bi-plus-square text-2xl"></i>
      </router-link>
      <router-link :to="{ name: 'top' }" class="pl-5">
        <i class="bi bi-list text-3xl"></i>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
}
</script>
