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
  asset_id: string
}): Promise<{ }> {
  const { data } = await client.post('/me/asset', params)
  return data
}

export async function deleteMe(params?: {}): Promise<{ }> {
  const { data } = await client.post('/me/delete', params)
  return data
}

export default {
  getMe,
  setUsername,
  setName,
  setAsset: setUserAsset,
  deleteMe,
}
