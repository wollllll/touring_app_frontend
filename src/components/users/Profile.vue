<template>
  <article>
    <div class="flex">
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=92310" />
        </div>
      </div>
      <p class="my-auto ml-3">
        加藤タカヒロ
        <router-link :to="{ name: 'user_edit', params: { id: 1 } }">
          <i class="bi bi-gear" />
        </router-link>
      </p>
    </div>
    <p class="mt-3">
      プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
    </p>
    <p class="mt-3 text-sm text-right">
      <span class="font-bold">100</span>&nbsp;フォロー
      <span class="font-bold">50</span>&nbsp;フォロワー
    </p>
  </article>
</template>
