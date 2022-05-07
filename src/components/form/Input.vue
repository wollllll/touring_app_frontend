<script setup>
import Label from '@/components/form/Label'

const props = defineProps({
  type: String,
  label: String,
  id: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
})
</script>

<template>
  <div class="w-full">
    <Label v-if="props.label" :for="props.id" :required="props.required">{{ props.label }}</Label>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :id="props.id"
      :disabled="props.disabled"
      class="input input-bordered w-full mt-1"
    />
  </div>
</template>
