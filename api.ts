import deviceApi from './api/deviceApi'
import emailApi from './api/emailApi'
import firebaseApi from './api/firebaseApi'
import localAuthApi from './api/localAuthApi'
import remoteApi from './api/remoteApi'

export {
  localAuthApi, emailApi, remoteApi, firebaseApi, deviceApi,
}

export default {
  ...localAuthApi,
  local: localAuthApi,
  remote: remoteApi,
  firebase: firebaseApi,
  email: emailApi,
  device: deviceApi,
}
