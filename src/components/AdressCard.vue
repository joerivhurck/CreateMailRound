<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { StreetType } from '@/models/models.type'
import StreetButton from './StreetButton.vue'
import { ref } from 'vue'

const props = defineProps<{
  streets: StreetType[]
}>()

const emit = defineEmits(['add-number'])

const handleAddNumber = (streetIndex: number) => {
  emit('add-number', streetIndex)
}
const clickedNumbers = ref<{ [key: string]: string[] }>({}) // Track clicked numbers as strings

// Handle click on number
const handleNumberClick = (streetName: string, number: string) => {
  if (!clickedNumbers.value[streetName]) {
    clickedNumbers.value[streetName] = []
  }
  if (clickedNumbers.value[streetName].includes(number)) {
    // If already clicked, remove from the array (toggle behavior)
    clickedNumbers.value[streetName] = clickedNumbers.value[streetName].filter((n) => n !== number)
  } else {
    // Add to the clicked numbers array
    clickedNumbers.value[streetName].push(number)
  }
}
</script>

<template>
  <ul class="flex gap-4 mt-4 flex-wrap">
    <li
      class="border-2 pr-56 h-[180px] rounded-xl p-4 flex flex-col"
      v-for="(street, index) in props.streets"
      :key="street.name"
    >
      <div class="font-semibold text-xl">{{ street.name }}</div>
      <div class="mt-4 text-md">Numbers</div>

      <div class="flex gap-1 mt-1">
        <div
          v-for="number in street.numbers"
          :key="number"
          @click="handleNumberClick(street.name, number)"
        >
          <!-- Apply bg-red-500 if number is clicked -->
          <div
            :class="[
              'w-6 h-6 flex rounded-md justify-center items-center cursor-pointer',
              clickedNumbers[street.name]?.includes(number) ? 'bg-red-500' : 'bg-gray-300'
            ]"
          >
            {{ number }}
          </div>
        </div>
      </div>
      <StreetButton
        class="w-fit text-xs bg-green-700 mt-3"
        :text="'Add Number'"
        @click="handleAddNumber(index)"
      />
    </li>
  </ul>
</template>
