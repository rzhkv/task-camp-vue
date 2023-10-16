<script setup>
import { ref, watch, computed } from 'vue'

import NavTabs from '@/components/NavTabs/NavTabs.vue'
import FormSignUp from '@/components/FormSignUp/FormSignUp.vue'
import FormSignIn from '@/components/FormSignIn/FormSignIn.vue'

const tabs = [
  {
    component: 'FormSignIn',
    name: 'Вход'
  },
  {
    component: 'FormSignUp',
    name: 'Регистрация'
  }
]

const selectedTab = ref('FormSignUp')

const activeComponent = computed(() => {
  return selectedTab.value === 'FormSignIn' ? FormSignIn : FormSignUp
})
</script>

<template>
  <div class="max-w-[420px] mx-auto">
    <NavTabs :tabs="tabs" v-model:selectedTab="selectedTab"></NavTabs>

    <component :is="activeComponent"> </component>
  </div>
</template>
