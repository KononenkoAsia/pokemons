import React from 'react'
import styled from 'styled-components'

const PokemonBlock = styled.div`
  height: 350px;
  width: 48%;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  margin: 0 1%;
  position: relative;
`

const PokemonText = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  position: absolute;
  top: 250px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 30px;
`
const PokemonImage = styled.img`
  width: 60%;
  margin-left: 20%;
  position: relative;
`
const PokemonTextName = styled.p`
  font-size: 26px;
  margin: 0;
  margin-bottom: 10px;
`
const PokemonTextType = styled.p`
  font-size: 18px;
  margin: 0;
`

const Pokemon = ({ name, type, src, id, onClick }) => {
  return (
    <PokemonBlock onClick={onClick}>
      <PokemonImage src={src} />
      <PokemonText>
        <PokemonTextName>
          {name}
          {id}
        </PokemonTextName>
        <PokemonTextType>{type}</PokemonTextType>
      </PokemonText>
    </PokemonBlock>
  )
}

export default Pokemon
