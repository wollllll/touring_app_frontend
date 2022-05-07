<script setup>
import Information from '@/components/alerts/Information'
import Base from '@/components/layouts/Base'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <section>
        <Information>
          <p>まだアカウントの登録が完了していません。</p>
          <p>ご登録のメールアドレス宛てに確認メールを送信しました。</p>
          <p>メールに記載のURLを押して承認をしてください。</p>
        </Information>
      </section>
    </div>
  </Base>
</template>
