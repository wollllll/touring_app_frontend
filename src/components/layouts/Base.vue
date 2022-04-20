<script setup>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header class="lg:px-40 sticky top-0 h-16 shadow" />
    <main class="p-3 lg:px-40 flex-grow">
      <slot />
    </main>
    <Footer class="lg:px-40 sticky bottom-0 h-16 shadow" />
  </div>
</template>
