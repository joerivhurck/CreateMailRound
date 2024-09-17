<script setup lang="ts">

const props = defineProps<{
  text : string
}>()
</script>


<template>
  <button
    class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

