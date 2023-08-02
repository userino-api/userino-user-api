import client from '../client'
import type { LoginOptions } from '../typings/api'

export default {
  async signUp(params: { email: string; password: string }): Promise<{}> {
    const { data } = await client.post('/local/signin', params)
    return data
  },
  async login(params: LoginOptions<{ email: string; password: string }>): Promise<{ token: string }> {
    const { data } = await client.post('/local/login', params)
    return data
  },
}
