import axios from '@/axios'

export const loginWithCredentials = async (email, password) => {
  const url = '/auth/token/'
  const data = { email, password }

  return (await axios.post(url, data)).data
}
