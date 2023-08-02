import deviceApi from './api/deviceApi'
import emailApi from './api/emailApi'
import firebaseApi from './api/firebaseApi'
import localAuthApi from './api/localAuthApi'
import meApi from './api/meApi'
import mediaApi from './api/mediaApi'
import remoteApi from './api/remoteApi'
import userApi from './api/userApi'

export * from './api/meApi'
export * from './api/userApi'

export {
  localAuthApi, emailApi, remoteApi, firebaseApi, deviceApi, meApi, mediaApi, userApi,
}

export default {
  ...localAuthApi,
  local: localAuthApi,
  remote: remoteApi,
  firebase: firebaseApi,
  email: emailApi,
  device: deviceApi,
  me: meApi,
  media: mediaApi,
  user: userApi,
}
