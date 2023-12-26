import client from '../client'

export async function getMe(): Promise<any> {
  const { data } = await client.get('/me')
  return data
}

export async function setUsername(
  params: {
    username: string
  },
): Promise<any> {
  const { data } = await client.post('/me/username', params)
  return data
}

export async function setName(params: {
  name: string
}): Promise<{ }> {
  const { data } = await client.post('/me/name', params)
  return data
}

export async function setUserAsset(params: {
  name: string
}): Promise<{ }> {
  const { data } = await client.post('/me/name', params)
  return data
}

export default {
  getMe,
  setUsername,
  setName,
  setAsset: setUserAsset,
}
