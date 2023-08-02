import client from '../client'
import type { LoginOptions } from '../typings/api'

export default {
  async create(): Promise<{ id: string }> {
    const { data } = await client.post('/remote/create')
    return data
  },

  async verify(id: string, options?: LoginOptions<{}>): Promise<{ is_accepted: boolean; token?: string }> {
    const { data } = await client.post(`/remote/${id}/verify`, options)
    return data
  },

  async accept(id: string): Promise<void> {
    const { data } = await client.post(`/remote/${id}/accept`)
    return data
  },
}
