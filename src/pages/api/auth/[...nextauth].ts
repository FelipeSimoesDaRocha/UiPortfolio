import NextAuth, { NextAuthOptions } from 'next-auth'

// Providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

// QQL
import GET_USER_BY_EMAIL from '../../../graphql/getUserByEmail.gql'
import CREATED_USER from '../../../graphql/createdUser.gql'

// Services
import clientApollo from '../../../services/apollo-client'


export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {

  },
  pages: {
    error: '/auth/error'
  },
};

export default NextAuth(authOptions)
