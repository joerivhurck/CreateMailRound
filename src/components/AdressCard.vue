<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { StreetType } from '@/models/models.type'
import StreetButton from './StreetButton.vue'

const props = defineProps<{
  streets: StreetType[]
}>()

const emit = defineEmits(['add-number'])

const handleAddNumber = (streetIndex: number) => {
  emit('add-number', streetIndex)
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
        <div v-for="number in street.numbers" :key="number">
          <div class="bg-gray-300 w-6 h-6 flex rounded-md justify-center items-center">{{ number }}</div>
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
