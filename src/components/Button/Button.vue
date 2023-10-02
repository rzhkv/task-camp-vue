<script setup>
import { computed } from 'vue'
import { cva } from 'class-variance-authority'

const props = defineProps({
  leftIcon: [Object, Function],
  as: {
    type: [String, Object],
    default: 'button'
  },
  intent: {
    type: String,
    validator: (value) => ['primary', 'secondary', 'text'].includes(value),
    default: 'primary'
  },
  size: {
    type: String,
    validator: (value) => ['small', 'medium'].includes(value),
    default: 'small'
  }
})

const buttonClass = computed(() => {
  return cva("inline-flex items-center justify-center rounded-4 transition-all cursor-pointer", {
    variants: {
      intent: {
        primary: 'bg-black text-white hover:bg-black/90',
        secondary: 'border border-gray-500 text-gray-500 hover:bg-gray-300 hover:text-gray-500',
        text: 'text-black hover:bg-black/5'
      },
      size: {
        small: 'h-[40px] px-12 py-4 text-sm',
        medium: 'h-[52px] px-16 py-8',
      },
    }
  })({
    intent: props.intent,
    size: props.size,
  })
})
</script>

<template>
  <component :is="props.as" :class="buttonClass">
    <component :is="props.leftIcon" class="w-20 h-20 mr-8"></component>
    <slot />
  </component>
</template>