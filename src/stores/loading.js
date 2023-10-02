import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoading = defineStore('loading', () => {
  const isLoading = ref(true)

  function updateStatus(value) {
    isLoading.value = value
  }

  return { isLoading, updateStatus }
})
