<template>
  <footer class="grid grid-cols-2">
    <div class="p-3 flex justify-center items-center">
      <router-link :to="{ name: 'top' }">
        <i class="bi bi-pin-map md:text-2xl " />
      </router-link>
    </div>
    <div class="p-3 flex justify-center items-center">
      <router-link :to="{ name: 'auth' }">
        <i class="bi bi-person-circle md:text-3xl" />
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
}
</script>
