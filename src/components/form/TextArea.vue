<script setup>
import Label from '@/components/form/Label'

const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  rows: Number,
  required: Boolean,
})
</script>

<template>
  <div class="w-full">
    <Label :for="props.id" :required="props.required">{{ props.label }}</Label>
    <textarea
      :placeholder="props.placeholder"
      :id="props.id"
      :rows="props.rows"
      class="textarea textarea-bordered w-full mt-1"
    ></textarea>
  </div>
</template>
