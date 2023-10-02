<script setup>
import { ref } from 'vue';

const props = defineProps({
  type: { type: String, default: 'text' },
  label: { type: String, default: '', required: true },
  modelValue: { type: String, default: '', required: true },
  error: [Boolean, String],
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (e) => {
  const value = e.target.value;
  emit('update:modelValue', value);
};
</script>

<template>
  <label class="block relative max-w-full">
    <input @input="handleInput" :placeholder="props.label" :value="props.modelValue" :type="props.type"
      :class="{ 'border-red-500': props.error }"
      class="peer bg-transparent border-gray-400 text-black border rounded-8 h-56 w-full pt-28 pb-12 px-16 outline-0 transition-all leading-tight font-medium placeholder:text-transparent focus:border-black">
    <span
      class="pointer-events-none absolute top-[50%] -translate-y-1/2 left-16 text-gray-400 transition-all peer-focus:text-black peer-focus:text-[10px] peer-focus:top-16 peer-[:not(:placeholder-shown)]:top-16 peer-[:not(:placeholder-shown)]:text-[10px]">
      <slot name="label">
        {{ props.label }}
      </slot>
    </span>
  </label>

  <p v-if="props.error" class="mt-4 text-xs text-red-600">
    {{ props.error }}
  </p>
</template>