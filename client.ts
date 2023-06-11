import axios from 'axios'
import packageJson from './package.json'
import { UserinoDeviceType } from './typings/types'

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

export default apiClient
