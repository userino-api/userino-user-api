
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
