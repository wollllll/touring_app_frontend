<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/formParts/Input'
import TextArea from '@/components/formParts/TextArea'
import Avatar from '@/components/users/Avatar'
import IconWithText from '@/components/viewParts/IconWithText'
</script>

<template>
  <div class="md:flex mt-5">
    <div class="text-center">
      <Avatar class="btn btn-ghost btn-circle md:w-28 md:h-28 w-24 h-24" />
      <div>
        <button type="button" class="hover:opacity-75">変更</button>
      </div>
    </div>
    <div class="md:ml-20 w-full">
      <Input
        type="text"
        label="ユーザー名"
        id="edit_user_name"
        placeholder="ユーザー名"
        :required="true"
      />
      <Input
        type="password"
        label="パスワード"
        id="edit_user_password"
        placeholder="パスワード"
        :required="true"
      />
      <Input
        type="password"
        label="パスワード再入力"
        id="edit_user_password_confirm"
        placeholder="パスワード再入力"
        :required="true"
      />
      <TextArea
        label="プロフィール"
        id="edit_user_profile"
        placeholder="プロフィール"
        :rows="5"
      />
      <div class="mt-5 text-right">
        <PrimaryButton class="w-auto">
          <IconWithText icon-class="bi-save"> 保存 </IconWithText>
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>
