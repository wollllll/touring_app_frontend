<script setup>
const props = defineProps({
  id: String,
  required: Boolean,
})
</script>

<template>
  <label :for="props.id" class="cursor-pointer">
    <slot />
    <span v-if="props.required" class="text-red-500">*</span>
  </label>
</template>
