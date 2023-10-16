<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['update:selectedTab'])

const clickOnTab = (tabComponent) => {
  emit('update:selectedTab', tabComponent)
}
</script>

<template>
  <ul class="flex p-4 gap-12 rounded-full border border-gray-100 mb-32">
    <li v-for="(tab, idx) in tabs" :key="idx" class="w-full">
      <a
        :class="[
          'flex items-center justify-center rounded-full  h-[48px] text-[12px] cursor-pointer',
          { 'bg-gray-100': tab.component === selectedTab }
        ]"
        @click.prevent="clickOnTab(tab.component)"
      >
        {{ tab.name }}
      </a>
    </li>
  </ul>
</template>
