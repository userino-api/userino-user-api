import client from '../client'

export async function getUser(
  user_id: string,
): Promise<any> {
  const { data } = await client.get(`/user/${user_id}`)
  return data
}

export default {
  getUser,
}
