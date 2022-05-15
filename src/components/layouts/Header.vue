<script setup>
import IconWithText from '@/components/IconWithText'
import Avatar from '@/components/users/Avatar'
import { storeService } from '@/services/storeService'

const APP_NAME = process.env.VUE_APP_APP_NAME
</script>

<template>
  <header class="primary-bg-color">
    <div class="navbar">
      <div class="flex-1">
        <router-link
          :to="{ name: 'top' }"
          class="btn btn-ghost text-lg normal-case"
        >
          {{ APP_NAME }}
        </router-link>
      </div>
      <div class="flex-none gap-2">
        <router-link
          :to="{ name: 'top' }"
          @click="storeService.commit.setIsShowSearchModal(true)"
          class="hover:opacity-75"
        >
          <i class="bi-search text-xl" />
        </router-link>
        <div class="dropdown dropdown-end flex items-center ml-3">
          <Avatar size="w-10" class="btn btn-ghost btn-circle" />
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content bg-base-100 rounded-box w-52 p-2 mt-3 shadow"
          >
            <li>
              <router-link :to="{ name: 'user_show', params: { id: 1 } }">
                <IconWithText icon-class="bi-person"> アカウント </IconWithText>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'auth_index' }">
                <IconWithText icon-class="bi-person">
                  アカウント登録
                </IconWithText>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'top' }"
                @click="storeService.commit.setIsCreateSpotModal(true)"
              >
                <IconWithText icon-class="bi-geo-alt">
                  スポットの投稿
                </IconWithText>
              </router-link>
            </li>
            <li>
              <button type="button">
                <IconWithText icon-class="bi-arrow-bar-right">
                  ログアウト
                </IconWithText>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
