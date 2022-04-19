<script setup>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header class="bg-blue-500 sticky top-0 h-16" />
    <main class="bg-green-500 flex-grow">
      <slot />
    </main>
    <Footer class="bg-blue-500 sticky bottom-0 h-16" />
  </div>
</template>
