<script setup>
import { computed } from 'vue'
import { cva } from 'class-variance-authority'

const props = defineProps({
  intent: {
    type: String,
    default: 'warning'
  }
})

const tagClass = computed(() => {
  return cva('inline-flex text-[12px] font-bold py-4 px-12 rounded-4 uppercase', {
    variants: {
      intent: {
        'default': 'border border-gray-100',
        'urgent': 'border border-gray-100',
        'important': 'border border-gray-100',
        'warning': 'border border-red-500 bg-red-100 text-red-500',
      }
    }
  })({
    intent: props.intent
  })
})
</script>

<template>
  <div :class="tagClass">
    <slot />
  </div>
</template>