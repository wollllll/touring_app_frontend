<script setup>
import Base from '@/components/forms/Base'
import Label from '@/components/forms/Label'

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
  <Base>
    <Label v-if="props.label" :for="props.id" :required="props.required">
      {{ props.label }}
    </Label>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :id="props.id"
      :disabled="props.disabled"
      class="input input-bordered w-full mt-1"
    />
  </Base>
</template>
