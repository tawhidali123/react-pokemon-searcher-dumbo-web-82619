import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    return (
      <Card>
      {console.log(this.props.specificPokemon)}
        <div>
          <div className="image">
            <img alt="oh no!" src={this.props.specificPokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.specificPokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.specificPokemon.stats[3].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
