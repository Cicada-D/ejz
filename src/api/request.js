import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: '/api'
})

export default service
