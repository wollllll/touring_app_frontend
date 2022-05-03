<script setup>
import Header from '@/components/layouts/Header'
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    // todo: ドロワーをjsで制御したい
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle">
      <div class="drawer-content">
        <Header class="lg:px-40 shadow" style="height: auto" />
        <main class="lg:px-40 flex-grow" style="height: 100vh">
          <slot />
        </main>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>

        </ul>
      </div>
    </div>
  </div>
</template>
