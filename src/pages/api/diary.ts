const User = require('../../../db/models/user')
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('Unexpected error', err)
      }
    }
  }
}
