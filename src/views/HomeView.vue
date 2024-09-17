<script setup lang="ts">
import { ref } from 'vue'
import type { StreetType } from '@/models/models.type'

const streets = ref<StreetType[]>([
  {
    name: 'Asbronstraat',
    numbers: ['1', '2']
  },
  {
    name: 'Hagelandstraat',
    numbers: ['2', '4', '4b']
  }
])

//ref value for a new number
const newNumber = ref('')
//ref value for new street
const newStreet = ref('')

//function that adds a number to the selected street
const addNumber = (streetIndex: number): void => {
  if (newNumber.value) {
    streets.value[streetIndex].numbers.push(newNumber.value)
    newNumber.value = ''
  }
}
const addStreet = (): void => {
  if (newStreet.value) {
    streets.value.push({
      name: newStreet.value,
      numbers: []
    })
    newStreet.value = ''
  }
}
</script>

<template>
  <div class="flex items-center mt-4 gap-2">
    <!-- Input for adding a new street -->
    <input
      class="bg-gray-100 border-2 border-black"
      type="text"
      v-model="newNumber"
      placeholder="Enter new number"
    />
    <input
      class="bg-gray-100 border-2 border-black"
      type="text"
      v-model="newStreet"
      placeholder="Enter new street name"
    />

    <!-- Input for adding a new number to a specific street -->

    <button @click="addStreet" class="ml-2 bg-blue-500 text-white px-2 py-1">Add Street</button>
  </div>

  <div class="mt-2" v-for="(street, index) in streets" :key="index">
    <div>
      <strong>{{ street.name }}</strong>
    </div>
    <div class="w-full flex gap-3">
      <div v-for="number in street.numbers" :key="number">{{ number }}</div>
    </div>
    <!-- Button to add a new number to the street -->
    <button @click="addNumber(index)" class="ml-2 bg-blue-500 text-white px-2 py-1">
      Add Number
    </button>
  </div>
</template>
