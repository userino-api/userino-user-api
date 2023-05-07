import client from '../client'

export default {
  async signUpLocalAccount(params: { email: string; password: string }): Promise<{}> {
    const { data } = await client.post('/local/signin', params)
    return data
  },
  async loginLocalAccount(params: { email: string; password: string }): Promise<{ token: string }> {
    const { data } = await client.post('/local/login', params)
    return data
  },
}
