import type { NextApiRequest, NextApiResponse } from 'next'

type Pong = {
  operational: true,
  message: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Pong>
) {
  res.status(200).json({ operational: true, message: "Pong" })
}
