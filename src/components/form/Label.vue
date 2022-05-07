<script setup>
const props = defineProps({
  id: String,
  required: Boolean,
})
</script>

<template>
  <label :for="props.id" class="cursor-pointer">
    <span v-if="props.required" class="text-red-500">*</span>
    <slot />
  </label>
</template>
