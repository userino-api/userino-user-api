import axios from 'axios'

export const apiClient = axios.create({
  // baseURL: config.userino.url,
  // headers: {
  //   app: config.userino.app_id,
  // },
})

export function initClient(params: { url: string; app_id: string }) {
  apiClient.defaults.baseURL = params.url
  apiClient.defaults.headers['app'] = params.app_id
}

export default apiClient
