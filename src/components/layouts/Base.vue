<script setup>
import Header from '@/components/layouts/Header'
import Modal from '@/components/layouts/Modal'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header class="lg:px-40 shadow" />
    <main class="lg:px-40 secondary-bg-color flex-grow">
      <div class="xl:px-64 p-5">
        <slot />
      </div>
    </main>
    <Modal />
  </div>
</template>
