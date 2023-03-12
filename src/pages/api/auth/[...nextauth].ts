import NextAuth, { NextAuthOptions } from "next-auth";

// Providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    })
  ],
  pages: {
    error: "/auth/error"
  },
};

export default NextAuth(authOptions);
