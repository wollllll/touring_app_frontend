<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
})
</script>

<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    class="input input-bordered w-full"
  />
</template>
