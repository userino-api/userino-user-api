import client from '../client'

export default {
  async create(): Promise<{ id: string }> {
    const { data } = await client.post('/remote/create')
    return data
  },

  async verify(id: string): Promise<{ is_accepted: boolean; token?: string }> {
    const { data } = await client.post(`/remote/${id}/verify`)
    return data
  },

  async accept(id: string): Promise<void> {
    const { data } = await client.post(`/remote/${id}/accept`)
    return data
  },
}
