import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  res.send(JSON.stringify(token, null, 2))
}

export default handler;