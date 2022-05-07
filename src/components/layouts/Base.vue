<script setup>
import DrawerMenu from '@/components/layouts/DrawerMenu'
import Header from '@/components/layouts/Header'
import AuthRegisterModal from '@/components/modals/AuthRegister'
import SearchModal from '@/components/modals/Search'
import SpotModal from '@/components/modals/Spot'
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <!-- todo: ドロワーをjsで制御したい -->
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Header class="lg:px-40 shadow" style="height: 8%" />
        <main class="lg:px-40 flex-grow" style="height: 92%">
          <slot />
        </main>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <DrawerMenu />
      </div>
    </div>
    <AuthRegisterModal />
    <SearchModal />
    <SpotModal />
  </div>
</template>
