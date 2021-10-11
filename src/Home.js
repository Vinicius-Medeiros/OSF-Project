import { useState } from 'react';

const Home = () => {

    const [pokemons, setPokemons] = useState([
        { title: "Arcanine", type1: "fire", type2: "default", id: 1 },
        { title: "Beedrill", type1: "bug", type2: "poison", id: 2 },
        { title: "Blastoise", type1: "water", type2: "default", id: 3 },
        { title: "Bulbasaur", type1: "grass", type2: "poison", id: 4 },
        { title: "Butterfree", type1: "bug", type2: "flying", id: 5 },
        { title: "Caterpie", type1: "bug", type2: "default", id: 6 },
        { title: "Charizard", type1: "fire", type2: "flying", id: 7 },
        { title: "Charmander", type1: "fire", type2: "default", id: 8 },
        { title: "Charmeleon", type1: "fire", type2: "default", id: 9 },
        { title: "Clefable", type1: "fairy", type2: "default", id: 10 },
        { title: "Dewgong", type1: "water", type2: "ice", id: 11 },
        { title: "Farfetchd", type1: "normal", type2: "flying", id: 12 },
        { title: "Golbat", type1: "poison", type2: "flying", id: 13 },
        { title: "Ivysaur", type1: "grass", type2: "poison", id: 14 },
        { title: "Kadabra", type1: "psychic", type2: "default", id: 15 },
        { title: "Kakuna", type1: "bug", type2: "poison", id: 16 },
        { title: "Metapod", type1: "bug", type2: "default", id: 17 },
        { title: "Pidgeot", type1: "normal", type2: "flying", id: 18 },
        { title: "Pidgeotto", type1: "normal", type2: "flying", id: 19 },
        { title: "Pidgey", type1: "normal", type2: "flying", id: 20 },
        { title: "Pikachu", type1: "electric", type2: "default", id: 21 },
        { title: "Ponyta", type1: "fire", type2: "default", id: 22 },
        { title: "Raichu", type1: "electric", type2: "default", id: 23 },
        { title: "Raticate", type1: "normal", type2: "default", id: 24 },
        { title: "Rattata", type1: "normal", type2: "default", id: 25 },
        { title: "Squirtle", type1: "water", type2: "default", id: 26 },
        { title: "Venusaur", type1: "grass", type2: "poison", id: 27 },
        { title: "Vulpix", type1: "fire", type2: "default", id: 28 },
        { title: "Wartortle", type1: "water", type2: "default", id: 29 },
        { title: "Weedle", type1: "bug", type2: "poison", id: 30 }
    ]);



    return (
        <div className="home">
            <h2 className="home-title">PokemonList</h2>
            <br />
            {pokemons.map((pokemon) => (
                <div className="pokemon-preview" key={pokemon.id}>
                    <h3 className="pokemon-title">{pokemon.title}</h3>
                    <img src={ "./images/pokemonImages/" + pokemon.title + ".png"}/>
                    <h4 className="pokemon-types">Type(s): </h4>
                    <hr className="pokemon-types-diviser"/>
                    <div className="pokemon-types-images">
                        <img src={"./images/pokemontypes/" + pokemon.type1 + ".png"}/>
                        <img src={"./images/pokemontypes/" + pokemon.type2 + ".png"}/>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Home;