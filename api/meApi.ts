import client from '../client'
import { LoginOptions } from '../typings/api'

export default {
  async setUsername(
    params: LoginOptions<{
      username: string
    }>,
  ): Promise<{ }> {
    const { data } = await client.post('/me/username', params)
    return data
  },

}
