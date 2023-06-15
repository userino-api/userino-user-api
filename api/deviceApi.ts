import client from '../client'

export default {
  async getMyDevices(): Promise<any[]> {
    const { data } = await client.get('/device/lost')
    return data
  },
  async saveDevice(params: { id: string; [key: string]: any }): Promise<{}> {
    const { data } = await client.post('/device/save', params)
    return data
  },
}
