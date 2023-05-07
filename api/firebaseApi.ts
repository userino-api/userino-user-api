import client from '../client'

export default {
  async login(params: { accessToken: string }): Promise<{ token: string }> {
    const { data } = await client.post('/firebase/login', params)
    return data
  },
}
