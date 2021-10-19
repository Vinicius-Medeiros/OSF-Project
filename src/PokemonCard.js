import { Link } from "react-router-dom";

const PokemonCard = ({pokemon}) => {
    return (  
        <div className="pokemon-card-preview" key={pokemon.id}>
                        <h3 className="pokemon-title">
                            {pokemon.title}
                        </h3>
                        <Link to={ `/pokemons/${pokemon.id}` }> 
                        <img className="pokeImg" src={ "/images/pokemonImages/" + pokemon.title + ".png"} alt= {pokemon.title + " image"}/>
                        <h4 className="pokemon-types-title">
                            Type(s): 
                        </h4>
                        <hr className="pokemon-types-title-divider"/>
                        <div className="pokemon-types">
                            {pokemon.types.map((type) => (
                                <div className='poke-type__item' key={'type-' + pokemon.id + "-" + type}>
                                    <span className={`${type === 'water' ? 'poke-type__water':''}
                                    ${type === 'fire' ? 'poke-type__fire':''} ${type === 'rock' ? 'poke-type__rock':''}
                                    ${type === 'ice' ? 'poke-type__ice':''} ${type === 'poison' ? 'poke-type__poison':''}
                                    ${type === 'grass' ? 'poke-type__grass':''} ${type === 'bug' ? 'poke-type__bug':''}
                                    ${type === 'normal' ? 'poke-type__normal':''} ${type === 'electric' ? 'poke-type__electric':''}
                                    ${type === 'fighting' ? 'poke-type__fighting':''} ${type === 'flying' ? 'poke-type__flying':''}
                                    ${type === 'steel' ? 'poke-type__steel':''} ${type === 'psychic' ? 'poke-type__psychic':''}
                                    ${type === 'ghost' ? 'poke-type__ghost':''} ${type === 'fairy' ? 'poke-type__fairy':''}
                                    ${type === 'dark' ? 'poke-type__dark':''} ${type === 'dragon' ? 'poke-type__dragon':''}
                                    ${type === 'none' ? 'poke-type__none':''} ${type === 'ground' ? 'poke-type__ground':''}`}>
                                        {type}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <hr className="pokemon-types-divider"/>
                        </Link>
                    </div>
    );
}
 
export default PokemonCard;