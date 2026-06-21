import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.PUBLIC_API_URL }),
  cache: new InMemoryCache(),
})