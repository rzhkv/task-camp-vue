import { defineStore } from 'pinia'
import { ref } from 'vue'

import { loginWithCredentials } from '@/axios/auth'

export const useAuth = defineStore('auth', () => {
  const token = ref('token')

  async function login(username, password) {
    try {
      const loginResult = await loginWithCredentials(username, password)
      this.token = loginResult.token
    } catch (error) {
      throw new Error(error)
    }
  }

  function resetAuth() {
    token.value = undefined
  }

  return { token, login, resetAuth }
})
