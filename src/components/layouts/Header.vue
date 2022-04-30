<script setup>
const APP_NAME = process.env.VUE_APP_APP_NAME
</script>

<template>
  <header class="grid grid-cols-2 bg-blue-300">
    <div class="flex items-center justify-start p-3 font-bold">
      <router-link :to="{ name: 'top' }">{{ APP_NAME }}</router-link>
    </div>
    <div class="flex items-center justify-end p-3">
      <router-link :to="{ name: 'top' }">
        <i class="bi bi-plus-square md:text-2xl sm:text-xl" />
      </router-link>
      <router-link :to="{ name: 'top' }" class="pl-5">
        <i class="bi bi-list md:text-3xl sm:text-2xl" />
      </router-link>
    </div>
  </header>
</template>
