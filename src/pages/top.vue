<script setup>
import Header from '@/components/layouts/Header'
import Modal from '@/components/layouts/Modal'
import GoogleMap from '@/components/viewParts/GoogleMap'
</script>

<template>
  <div class="secondary-bg-color flex flex-col min-h-screen">
    <Header class="lg:px-40 shadow" />
    <main class="flex-1">
      <GoogleMap />
    </main>
    <Modal />
  </div>
</template>
