import deviceApi from './api/deviceApi'
import emailApi from './api/emailApi'
import firebaseApi from './api/firebaseApi'
import localAuthApi from './api/localAuthApi'
import meApi from './api/meApi'
import mediaApi from './api/mediaApi'
import remoteApi from './api/remoteApi'

export {
  localAuthApi, emailApi, remoteApi, firebaseApi, deviceApi, meApi, mediaApi,
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
}
