import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://api.react-finland.fi/graphql',
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
