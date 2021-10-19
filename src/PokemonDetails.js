import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import useFetch from "./useFetch";

const PokemonDetails = () => {
    const { id } = useParams();
    const { data, pending, error} = useFetch('http://localhost:8000/pokemons/' + id);

    return (  
        <div className="pokemon-details">
            {pending && <h2 className="msgLoading">Loading...</h2>}
            {error && <h2 className="msgLoading">{error}</h2>}
            {!pending && !error && 
            <div> 
                <h2 className="pokemon-details-title">{data.title} - Details:</h2> 
                <div className="Pokemon-List-Preview">
                {<PokemonCard pokemon={data}/>}
                </div>
            </div>}
            
        </div>
    );
}
 
export default PokemonDetails;