<script setup>
import Base from '@/components/layouts/Base'
import Profile from '@/components/users/Profile'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <div class="card bg-white shadow">
        <div class="card-body">
          <Profile />
        </div>
      </div>
    </div>
  </Base>
</template>
