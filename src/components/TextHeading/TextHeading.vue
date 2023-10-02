<script setup>
const props = defineProps({
  tag: { type: String, default: 'h2' }
})
</script>

<template>
  <component :is="props.tag" :class="{
    'text-4xl': tag === 'h1',
    'text-2xl': tag === 'h2',
    'text-xl': tag === 'h3',
  }">
    <slot />
  </component>
</template>