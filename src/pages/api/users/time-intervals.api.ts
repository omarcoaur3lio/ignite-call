import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).end()
  }

  const session = await getServerSession(
    request,
    response,
    buildNextAuthOptions(request, response),
  )

  return response.json({
    session,
  })
}
