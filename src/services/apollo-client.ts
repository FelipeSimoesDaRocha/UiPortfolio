import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const fromBase64 = (value: string) => {
  const buff = Buffer.from(value, 'base64')
  return buff.toString('ascii')
}
const httpLink = createHttpLink({
  uri: 'https://graphql.fauna.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: fromBase64(process.env.NEXT_PUBLIC_FAUNADB_KEY_GRAPHQL)
    }
  }
})

const clientApollo = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default clientApollo
