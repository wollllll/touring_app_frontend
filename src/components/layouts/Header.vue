<script setup>
const APP_NAME = process.env.VUE_APP_APP_NAME
console.log(APP_NAME)
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
      <label for="my-drawer" tabindex="0" class="pl-5">
        <img
          class="btn btn-sm btn-ghost btn-circle avatar"
          alt="ユーザーicon"
          src="https://api.lorem.space/image/face?hash=33791"
        />
      </label>
    </div>
  </header>
</template>
