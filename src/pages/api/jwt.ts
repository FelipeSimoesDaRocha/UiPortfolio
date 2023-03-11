import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const Jwt = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret: `${process.env.NEXTAUTH_SECRET}` })
  res.send(JSON.stringify(token))
}

export default Jwt;