import type { NextApiRequest, NextApiResponse } from "next"

const apiNext = (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date().toISOString()

  res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");

  res.status(200).json({ name: "John Doe", date });
}

export default apiNext
