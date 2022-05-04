<script setup>
const APP_NAME = process.env.VUE_APP_APP_NAME
console.log(APP_NAME)
</script>

<template>
  <header class="grid grid-cols-2 px-2 bg-blue-300">
    <div class="flex items-center justify-start">
      <router-link :to="{ name: 'top' }" class="font-bold">
        {{ APP_NAME }}
      </router-link>
    </div>
    <div class="flex items-center justify-end">
      <router-link :to="{ name: 'top' }">
        <i class="bi bi-plus-square text-2xl" />
      </router-link>
      <label for="my-drawer" tabindex="0" class="pl-5">
        <img
          class="btn btn-sm btn-ghost btn-circle avatar object-cover"
          alt="ユーザーicon"
          src="https://api.lorem.space/image/face?hash=33791"
        />
      </label>
    </div>
  </header>
</template>
