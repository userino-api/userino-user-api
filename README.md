
React Hooks for working with async operations.

[![npm](https://img.shields.io/npm/v/@userino/user-api)](https://www.npmjs.com/package/@userino/user-api)

## Install

``yarn add @userino/user-api``

or 

```npm i -S @userino/user-api```

## Example

```tsx
import { initClient } from '@userino/user-api'
import config from './config'

initClient({
  url: config.userino.url,
  app_id: config.userino.app_id,
})
```


#### Init device

We recommend always to initialise device for user. Can be mobile/web.

```tsx
import { initClient } from '@userino/user-api'

initDevice({
  deviceId,
  deviceType: Platform.OS as 'android' | 'ios',
})
```


### Apis

example:
```tsx
import { localAuth, emailApi, remoteApi, firebaseApi  } from '@userino/user-api'

// ...
```