import client from '../client'

export interface IssueCreatePayload {
  text: string
  data: Record<string, any>
}

export async function issueCreate(
  payload: IssueCreatePayload,
): Promise<any> {
  const { data } = await client.post('/issue/create', payload)
  return data
}

export async function issueList(): Promise<any> {
  const { data } = await client.get('/issue/list')
  return data
}

export default {
  issueCreate,
  issueList,
}
