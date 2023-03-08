// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
// import clientApollo from '../../../services/apollo-client'

// import GET_USER_BY_EMAIL from '../../../graphql/getUserByEmail.gql'
// import CREATED_USER from '../../../graphql/createdUser.gql'

// import { session, user } from "../../../models";


// export default NextAuth({
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//       scope: 'read:user'
//     }),
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     })
//   ],
//   callbacks: {
//     async session(session: session) {
//       try {
//         const { data } = await clientApollo.query({
//           query: GET_USER_BY_EMAIL,
//           variables: {
//             email: session.user.email
//           }
//         })

//         if (!data.userByEmail?._id) return session

//         return {
//           ...session,
//           userId: data.userByEmail._id
//         }
//       } catch {
//         return session
//       }
//     },
//     async signIn(user: user) {
//       const { email, name } = user
//       const [firstName, lastName] = name.split(' ')
//       try {
//         if (!email) {
//           return '/auth/error?emailGitHubNotFound=true&gitError=true'
//         }
//         const { data } = await clientApollo.query({
//           query: GET_USER_BY_EMAIL,
//           variables: {
//             email
//           }
//         })
//         if (data.userByEmail?.email) return true

//         await clientApollo.mutate({
//           mutation: CREATED_USER,
//           variables: {
//             email,
//             firstName,
//             lastName
//           }
//         })

//         return true
//       } catch (e) {
//         console.log(e)
//         return '/auth/error'
//       }
//     }
//   },
//   pages: {
//     error: '/auth/error'
//   }
// })
