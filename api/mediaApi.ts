import client from '../client'

export default {
  async createUploadToken(): Promise<{ token: string }> {
    const { data } = await client.post('/media/create-upload-token')
    return data
  },
}
