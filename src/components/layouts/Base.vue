<script setup>
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import Modal from '@/components/layouts/Modal'
</script>

<template>
  <div>
    <div class="secondary-bg-color flex flex-col h-screen">
      <Header class="lg:px-40 shadow" />
      <main class="lg:px-40 grow">
        <div class="xl:px-64 p-5">
          <slot />
        </div>
      </main>
    </div>
    <Footer />
    <Modal />
  </div>
</template>
