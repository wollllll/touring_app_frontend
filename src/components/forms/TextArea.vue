<script setup>
import Base from '@/components/forms/Base'
import Label from '@/components/forms/Label'

const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  rows: Number,
  required: Boolean,
})
</script>

<template>
  <Base>
    <Label :for="props.id" :required="props.required">{{ props.label }}</Label>
    <textarea
      :placeholder="props.placeholder"
      :id="props.id"
      :rows="props.rows"
      class="textarea textarea-bordered w-full mt-1"
    ></textarea>
  </Base>
</template>
