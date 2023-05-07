import emailApi from './api/emailApi'
import firebaseApi from './api/firebaseApi'
import localAuth from './api/localAuth'
import remoteApi from './api/remoteApi'

export {
  localAuth, emailApi, remoteApi, firebaseApi,
}

export default {
  ...localAuth,
  local: localAuth,
  remote: remoteApi,
  firebase: firebaseApi,
  email: emailApi,
}
