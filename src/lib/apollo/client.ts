import { API_URL } from '$lib/constants/pokemon';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
}  from '@apollo/client/core';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: API_URL,
  }),
  cache: new InMemoryCache()
});


