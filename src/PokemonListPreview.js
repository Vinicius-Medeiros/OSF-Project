import PokemonCard from "./PokemonCard";

const PokemonListPreview = ({pokemons}) => {

    return (
        <div className="Pokemon-List-Preview">
            {pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                <PokemonCard pokemon={pokemon}/>
                </div>
            ))}
        </div>
    );
}
 
export default PokemonListPreview;