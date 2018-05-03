import * as axios from 'axios'

export const fetch = axios.create({
  baseURL: 'http://localhost:9000/api/'
})

fetch.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('token')
  if (accessToken) {
    config.params = config.params || {}
    config.params.access_token = accessToken
  }
  return config
})
