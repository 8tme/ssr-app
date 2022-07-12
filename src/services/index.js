import axios from 'axios'

export const isServer = typeof window === 'undefined'

const axiosBase = axios.create({
  baseURL: isServer ? 'https://api.github.com/users/8tme' : '',
})

export async function getData() {
  return await axiosBase.get('/repos')
}
