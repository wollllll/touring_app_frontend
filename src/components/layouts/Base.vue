<script setup>
import Header from '@/components/layouts/Header'
import AuthRegisterModal from '@/components/modals/AuthRegister'
import SearchModal from '@/components/modals/Search'
import CreateSpotModal from '@/components/modals/spots/Create'
import ShowSpotModal from '@/components/modals/spots/Show'
</script>

<template>
  <div class="secondary-bg-color flex flex-col h-screen">
    <Header class="lg:px-40 shadow" />
    <main class="lg:px-40 flex-grow">
      <slot />
    </main>
    <AuthRegisterModal />
    <SearchModal />
    <ShowSpotModal />
    <CreateSpotModal />
  </div>
</template>
