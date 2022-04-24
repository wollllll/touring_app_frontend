<script setup>
const APP_NAME = process.env.VUE_APP_APP_NAME
console.log(APP_NAME)
</script>

<template>
  <header class="grid grid-cols-2 bg-blue-300">
    <div class="p-3 flex justify-start items-center">
      <router-link :to="{ name: 'top' }">アプリ名</router-link>
    </div>
    <div class="p-3 flex justify-end items-center">
      <router-link :to="{ name: 'top' }">
        <i class="bi bi-plus-square md:text-2xl sm:text-xl"></i>
      </router-link>
      <router-link :to="{ name: 'top' }" class="pl-5">
        <i class="bi bi-list md:text-3xl sm:text-2xl"></i>
      </router-link>
    </div>
  </header>
</template>
