<!-- StreetManager.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import InputField from '@/components/InputField.vue'
import StreetButton from '@/components/StreetButton.vue'
import AddressCard from '@/components/AdressCard.vue'
import { getStreets } from '@/service/StreetsData.service'

const { streets } = getStreets()
const newStreet = ref('')
const newNumber = ref('')


const addStreet = (): void => {
  if (newStreet.value) {
    streets.value.push({
      name: newStreet.value,
      numbers: []
    })
    newStreet.value = ''
  }
}

const addNumber = (streetIndex: number): void => {
  if (newNumber.value) {
    streets.value[streetIndex].numbers.push(newNumber.value)
    newNumber.value = ''
  }
}



</script>

<template>
  <div class="container w-[1200px] mx-auto p-6">
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">Add New Street</h2>
    <div class="flex gap-2 mb-4">
      <InputField v-model="newStreet" placeholder="Enter new street name" />
      <StreetButton :text="'Add Street'" @click="addStreet" />
    </div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">Add New Number</h2>
    <InputField v-model="newNumber" placeholder="Enter new number" />
    <AddressCard :streets="streets" @add-number="addNumber" />
  </div>
</template>
