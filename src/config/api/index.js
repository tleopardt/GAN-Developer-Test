import axios from 'axios'

/**
 * Public API connection
 */
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export { axiosConfig }
