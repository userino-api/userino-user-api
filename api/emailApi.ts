import client from '../client'

export default {
  async sendVerification(): Promise<{ is_verified: boolean }> {
    const { data } = await client.post('/email/send')
    return data
  },
  async verifyEmail(params: { code: string }): Promise<{ isVerified: boolean }> {
    const { data } = await client.post('/email/verify', params)
    return data
  },
}
