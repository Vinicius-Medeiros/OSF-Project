import PokemonCard from "./PokemonCard";

const PokemonListPreview = ({pokemons}) => {

    return (
        <div className="Pokemon-List-Preview">
            {pokemons.map((pokemon) => (
                    <PokemonCard pokemon={pokemon}/>
            ))}
        </div>
    );
}
 
export default PokemonListPreview;