<script setup>
import Header from '@/components/layouts/Header'
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Header class="lg:px-40 shadow" style="height: 8%" />
    <main class="lg:px-40 flex-grow" style="height: 84%">
      <slot />
    </main>
  </div>
</template>
