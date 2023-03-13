import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({ color, img, name, type, weight, setPokemon }) => {

  const pokemonEvoluido = {
    name: "Pichu2",
    type: "Electric2",
    evolved: false,
    weight: 3,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  } 

  const evoluirPokemon = (pokemonEvoluido) => {
    setPokemon(pokemonEvoluido)  
  }
    
  return (
    <Card color={color}>
        <img src={img} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(pokemonEvoluido)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard