import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Router from 'next/router'
import Pokemon from '../components/pokemon'
import styled from 'styled-components'

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
const AllPokemonsBlock = styled.div`
  width: 80%;
  margin-left: 10%;
  overflow: hidden;
  box-sizing: border-box;
`

const Content = () => {
  const showPokemons = () => {
    return (
      <Query query={getPokemons}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.pokemons.map(pokemon => {
            return (
              <Pokemon
                key={pokemon.id}
                onClick={() => {
                  Router.push({ pathname: '/pokemonInfo' })
                }}
                src={pokemon.image}
                name={pokemon.name}
                type={pokemon.types}
              />
            )
          })
        }}
      </Query>
    )
  }

  return <AllPokemonsBlock>{showPokemons()}</AllPokemonsBlock>
}

export default Content
