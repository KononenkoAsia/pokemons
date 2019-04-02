import React from 'react'
import { withRouter } from 'next/router'

const PokemonInfo = ({
  router: {
    query: { id }
  }
}) => {
  return (
    <div>
      <h2>This is my id:</h2>
      <h3> {id}</h3>
    </div>
  )
}

export default withRouter(PokemonInfo)
