import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./routes";
import { typeDefs, resolvers } from "./apollo/store";

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError)
        console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      credentials: "same-origin",
    }),
  ]),
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    isDrawerOpened: false,
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
