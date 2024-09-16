<script setup lang="ts">

const streets = {
  name : 'asbronstraat',
  number : ["1","2"]
}
</script>

<template>
  <div>{{ streets.name }}</div>
  <div v-for="number in streets.number" :key="number">{{ number }}</div>
</template>
