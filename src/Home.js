import PokemonListPreview from './PokemonListPreview';
import useFetch from './useFetch';

const Home = () => {

    const { data: pokemons, pending, error } = useFetch('http://localhost:8000/pokemons');

    return (
        <div className="home">
            { error && <h2 className="msgLoading">{error}</h2> }            
            { pending && <h2 className="msgLoading">Loading...</h2> }
            { !pending && !error &&<h2 className="home-title">PokemonList</h2>}
            <br />
            {pokemons && <PokemonListPreview pokemons={pokemons}/>}
        </div>
    );
}

export default Home;
