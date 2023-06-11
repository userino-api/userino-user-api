import client from '../client'
import { LoginOptions } from '../typings/api'

export default {
  async login(
    params: LoginOptions<{
      accessToken: string
    }>,
  ): Promise<{ token: string }> {
    const { data } = await client.post('/firebase/login', params)
    return data
  },

  async saveFcmToken(
    params: LoginOptions<{
      token: string
    }>,
  ): Promise<void> {
    const { data } = await client.post('/firebase/fcm-token', params)
    return data
  },
}
