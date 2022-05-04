<script setup>
// eslint-disable-next-line no-undef
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
