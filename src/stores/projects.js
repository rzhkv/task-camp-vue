import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  const projects = reactive({})

  async function getProjects() {
    try {
      projects.value = {
        id: 1,
        title: 'title',
        description: 'description'
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { projects, getProjects }
})
