

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define props
const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

// Define emits
const emit = defineEmits(['update:modelValue']);

// Use a local variable to manage input changes
const inputValue = ref(props.modelValue);

// Watch for changes in props and update the local variable
watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal;
});

// Emit the update:modelValue event
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <input
    class="bg-white border-2 border-gray-300 rounded-lg p-3 w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue($event)"
  />
</template>