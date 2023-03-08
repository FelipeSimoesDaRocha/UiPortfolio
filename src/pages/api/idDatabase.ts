import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { query as q } from 'faunadb'
import { fauna } from "../../services/fauna";

type User = {
  ref: {
    id: string
  },
  data: {
    idDatabase: string
  }
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    const session = await getSession({ req })

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    )

    let idDatabaseNotion = user.data.idDatabase

    if (!idDatabaseNotion) {
      const { idDatabase } = req.body
      await fauna.query(
        q.Update(
          q.Ref(q.Collection('user'), user.ref.id),
          {
            data: {
              idDatabase, idDatabaseNotion
            }
          }
        )
      )

      idDatabaseNotion = idDatabase
    }

    return res.status(200).json({idDatabase :idDatabaseNotion})
  } else {
    res.setHeader('Allow', "POST")
    res.status(405).end('Method not allowed')
  }
  
}