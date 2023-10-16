<script setup>
const props = defineProps({
  tag: { type: String, default: 'h2' }
})
</script>

<template>
  <component :is="props.tag" :class="{
    'text-4xl font-medium': tag === 'h1',
    'text-2xl font-medium': tag === 'h2',
    'text-xl font-medium': tag === 'h3',
  }">
    <slot />
  </component>
</template>