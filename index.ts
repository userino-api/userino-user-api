import userinoApi from './api'
import userinoApiClient, {
  setAuth, removeAuth, initDevice, initClient,
} from './client'

export * from './typings/types'
export * from './api'
export * from './client'
export { userinoApiClient }

export default {
  setAuth,
  removeAuth,
  initDevice,
  initClient,
  ...userinoApi,
}
