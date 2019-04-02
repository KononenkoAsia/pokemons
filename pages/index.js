import React from 'react'
import Content from './content'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
})

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  )
}

export default Index
