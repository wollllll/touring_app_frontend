<script setup>
import Avatar from '@/components/users/Avatar'
import { storeService } from '@/services/storeService'
import { useRouter } from 'vue-router'

const router = useRouter()

const pushUserShow = () => {
  storeService.commit.setIsShowSpotModal(false)
  router.push({ name: 'user_show', params: { id: 1 } })
}
</script>

<template>
  <article>
    <div class="flex">
      <Avatar class="btn btn-ghost btn-circle" @click="pushUserShow" />
      <p class="my-auto ml-3">
        加藤タカヒロ
        <router-link
          :to="{ name: 'user_edit', params: { id: 1 } }"
          class="hover:opacity-75"
        >
          <i class="bi bi-gear text-lg" />
        </router-link>
      </p>
    </div>
    <p class="mt-3">
      プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
    </p>
    <p class="mt-3 text-sm text-right">
      <router-link
        :to="{ name: 'user_follow', params: { id: 1 } }"
        class="hover:opacity-75"
      >
        <span class="font-bold">100</span>&nbsp;フォロー
      </router-link>
      <router-link
        :to="{ name: 'user_follow', params: { id: 1 } }"
        class="hover:opacity-75 ml-1"
      >
        <span class="font-bold">50</span>&nbsp;フォロワー
      </router-link>
    </p>
  </article>
</template>
