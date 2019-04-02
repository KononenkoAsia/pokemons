import React, { useState } from 'react'
import { gql } from 'apollo-boost'

const getPokemons = gql`
  {
    pokemons(first: 4) {
      id
      name
      types
      image
    }
  }
`

const Page = () => {

  const showPokemons = () => {
    return <p>Hello</p>
  }

  return <div>{showPokemons()}</div>
}

export default Page
