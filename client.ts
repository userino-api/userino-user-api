import axios from 'axios'
import packageJson from './package.json'
import { UserinoDeviceType } from './types'

export const apiClient = axios.create({
  // baseURL: config.userino.url,
  headers: {
    version: packageJson.version,
  },
})

export function initClient(params: { url: string; app_id: string }) {
  apiClient.defaults.baseURL = params.url
  apiClient.defaults.headers['app'] = params.app_id
}

export function initDevice({ deviceType, deviceId }: { deviceType: UserinoDeviceType; deviceId: string }) {
  apiClient.defaults.headers['device-type'] = deviceType
  apiClient.defaults.headers['device'] = deviceId
}

export function setAuth({ token }:{ token: string | null | undefined }) {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = token
  } else {
    delete apiClient.defaults.headers.common['Authorization']
  }
}

export function removeAuth() {
  return setAuth({ token: undefined })
}

export default apiClient
