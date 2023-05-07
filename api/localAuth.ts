import client from '../client'

export default {
  async signUp(params: { email: string; password: string }): Promise<{}> {
    const { data } = await client.post('/local/signin', params)
    return data
  },
  async login(params: { email: string; password: string }): Promise<{ token: string }> {
    const { data } = await client.post('/local/login', params)
    return data
  },
}
