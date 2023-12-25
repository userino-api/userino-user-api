import client from '../client'

export async function organisationGetList(): Promise<any> {
  const { data } = await client.get('/organisation/list')
  return data
}

export async function organisationCreate(params: { name: string}): Promise<any> {
  const { data } = await client.post('/organisation/create', params)
  return data
}

export async function organisationLogin(id: string): Promise<any> {
  const { data } = await client.post(`/organisation/${id}/login`)
  return data
}

export default {
  getList: organisationGetList,
  create: organisationCreate,
  login: organisationLogin,
}
