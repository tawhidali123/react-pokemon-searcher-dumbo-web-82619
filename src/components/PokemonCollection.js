import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state = {
    pokemons: []
  }



  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(res => {
      console.log(res);
      this.setState({
        pokemons: res
      })

    })
  }



  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        
        {/* <PokemonCard /> */}

        { this.state.pokemons.map(
            (pokemon) => {
              return <PokemonCard specificPokemon={pokemon} />
            }
        ) }

      </Card.Group>
    )
  }
}

export default PokemonCollection
