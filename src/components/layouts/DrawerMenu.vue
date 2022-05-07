<script setup>
import { storeService } from '@/services/storeService'
</script>

<template>
  <ul
    class="menu md:w-1/4 bg-base-100 text-base-content w-3/4 p-4 overflow-y-auto"
  >
    <li>
      <router-link :to="{ name: 'user_edit', params: { id: 1 } }">
        アカウント<i class="bi bi-person text-lg"></i>
      </router-link>
    </li>
    <li>
      <button
        type="button"
        @click="storeService.commit.setIsCreateSpotModal(true)"
      >
        スポットの投稿<i class="bi bi-person text-lg"></i>
      </button>
    </li>
  </ul>
</template>
