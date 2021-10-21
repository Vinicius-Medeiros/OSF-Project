import { useState } from "react";
import { useHistory } from "react-router";

const AddNewPokemon = () => {
    const [title, setTitle] = useState("");
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    var types = [];


    const handleSubmit = (e) => {
        e.preventDefault();
        types[0]= type1;
        types[1]= type2;
        if (types[1] === '') {
            types[1] = "none"
        }
        const pokemon = { title, types }

        setIsPending(true);

        fetch('http://localhost:8000/pokemons', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json'},
            body: JSON.stringify(pokemon)
        }).then(() => {
            alert("A NEW POKEMON HAS BEEN ADDED!");
            setIsPending(false);
            history.push('/');
        })
    }

    var types1 = [
        "FIRE", "WATER", "ICE", "GRASS", "NORMAL", "BUG", "POISON", "DARK",
        "ELECTRIC", "FIGHTING", "STEEL", "GHOST", "FAIRY", "GROUND", "ROCK", "FLYING",
        "DRAGON", "PSYCHIC"
    ]

    var types2 = [
        "FIRE", "WATER", "ICE", "GRASS", "NORMAL", "BUG", "POISON", "DARK",
        "ELECTRIC", "FIGHTING", "STEEL", "GHOST", "FAIRY", "GROUND", "ROCK", "FLYING",
        "DRAGON", "PSYCHIC", "NONE"
    ]

    return (  
        <div className="NewPokemon">

            <h2 className="NewPokemonTitle">Let’s add a new pokemon!</h2>

            <form onSubmit={handleSubmit}>

                <div className="PokemonFormName">
                    <label className="pokemon_form-label CustomizePokemonFormName-Title">Enter the pokemon name:</label>
                    <input className="PokemonFormInputText" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="pokemonName" placeholder="Pokemon name..." />
                </div>

                <div className="PokemonFormType">
                    <label className="pokemon_form-label CustomizePokemonFormName-Title">Select the pokemon main type:</label>
                    <select className="SelectButton" defaultValue="" required name="types1" onChange={(e) => setType1(e.target.value)}>
                        <option className="select-items" value="" disabled key={0}>Type:</option>
                        {types1.map((type1) => {
                            return <option className="select-items" value={type1.toLowerCase()} key={type1}>{type1}</option>
                        })}
                    </select>
                </div>

                <div className="PokemonFormType">
                    <label className="pokemon_form-label CustomizePokemonFormName-Title">Select the pokemon secondary type:</label>
                    <select className="SelectButton" defaultValue="" name="types2" onChange={(e) => setType2(e.target.value)}>
                        <option className="select-items" value="" disabled key={0}>Type:</option>
                        {types2.map((type2) => {
                            return <option className="select-items" value={type2.toLowerCase()} key={type2}>{type2}</option>
                        })}
                    </select>
                </div>

                <div className="PokemonFormImg">
                    <label className="pokemon_form-label CustomizePokemonFormName-Title">Select the pokemon image:</label>
                    <input className="select-file" type="file"/>
                </div>

                <div className="Submit">
                    { !isPending && <button className="SubmitButton" type="submit">ADD POKEMON</button>}
                    { isPending && <button className="SubmitButton" type="submit" disabled >ADDING POKEMON...</button>}
                </div>

            </form>
        </div>
    );
}
 
export default AddNewPokemon;