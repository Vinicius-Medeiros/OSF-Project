import { useParams } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "./PokemonCard";
import useFetch from "./useFetch";

const PokemonDetails = () => {

    const { id } = useParams();
    var { data, pending, error} = useFetch('http://localhost:8000/pokemons/' + id);
    const history = useHistory();
    
    var [type1, setType1] = useState("");
    var [type2, setType2] = useState("");
    var [changedCard, setChangedCard] = useState({
        "title": "",
        "types": [],
        "id": 0
    })
    
    
    var customizedCard = {}

    customizedCard = data

    const seeChanges = (e) => {
        let {title, types} = changedCard
        e.preventDefault();
        types[0]= type1;
        types[1]= type2;
        if (types[0] === "") {
            types[0] = data.types[0]
        }
        if (types[1] === "") {
            types[1] = data.types[1]
        }
        if (types[0] === types[1]) {
            types[1] = "none"
        }
        if (title === "") {
            title = data.title
        }
        setChangedCard({title, types, id})
    }

    const saveChanges = (e) => {
        e.preventDefault();
        var changedPokemon = {
            method: 'PUT',
            headers: { 'Content-type': 'Application/json'},
            body: JSON.stringify(changedCard)
        }
        fetch('http://localhost:8000/pokemons/' + id, changedPokemon)
        .then(response => response.json())
        .then(data = { data:data })
        .then(
            history.push('/'),
            window.location.reload()
        )
    }

    const deleteClick = () => {
        fetch('http://localhost:8000/pokemons/' + id, {
            method: 'DELETE'
        }).then(() => {
            alert('POKEMON HAS BEEN DELETED!');
            history.push('/');
        })
    }

    var types1 = [
        "fire", "water", "ice", "grass", "normal", "bug", "poison", "dark",
        "electric", "fighting", "steel", "ghost", "fairy", "ground", "rock", "flying",
        "dragon", "psychic"
    ]

    var types2 = [
        "fire", "water", "ice", "grass", "normal", "bug", "poison", "dark",
        "electric", "fighting", "steel", "ghost", "fairy", "ground", "rock", "flying",
        "dragon", "psychic", "none"
    ]

    return (  
        <div className="pokemon-details">
            {!pending && !error && 
            <div> 
                <h2 className="pokemon-details-title">{customizedCard.title} - Details</h2>
                <div className="pokemon-details-subtitle"> 
                    
                </div>
                <div className="CustomizeDetails">
                    <div className="CurrentCardPreview">
                        <h2 className="current-pokemon-card">current pokemon card</h2>
                        {<PokemonCard pokemon={data}/>}
                        <button className="DeleteButton" onClick={deleteClick}>
                            DELETE
                        </button>
                    </div>
                    <div>
                        <h2 className="customize-pokemon-card">Adjust or change the pokemon card</h2>
                        <form onSubmit={seeChanges}>

                            <div className="CustomizePokemonFormName">
                                <label className="pokemon_form-label CustomizePokemonFormName-Title">Edit name:</label>
                                <input type="text" className="InputCustomizeName" placeholder="New Pokemon name" defaultValue={data.title} required
                                onChange={(e) => setChangedCard({...changedCard, title: e.target.value})} />
                            </div>
                            
                            <div className="CustomizePokemonFormType">
                                <label className="pokemon_form-label CustomizePokemonFormType-Title">Edit main type:</label>
                                <select className="CustomizeSelectButton" defaultValue="" name="types1" 
                                onChange={(e) => setType1(e.target.value)}>
                                    <option className="Customize-select-items" value="" disabled key={0}>{data.types[0]}</option>
                                    {types1.map((type1) => {
                                        return <option className="Customize-select-items" value={type1} key={type1}>{type1}</option>
                                    })}
                                </select>
                            </div>

                            <div className="CustomizePokemonFormType">
                                <label className="pokemon_form-label CustomizePokemonFormType-Title">Edit secondary type:</label>
                                <select className="CustomizeSelectButton" defaultValue="" name="types2" 
                                onChange={(e) => setType2(e.target.value)}>
                                    <option className="Customize-select-items" value="" disabled key={0}>{data.types[1]}</option>
                                    {types2.map((type2) => {
                                        return <option className="Customize-select-items" value={type2} key={type2}>{type2}</option>
                                    })}
                                </select>
                            </div>

                            <div className="CustomizePokemonFormImg">
                                <label className="pokemon_form-label CustomizePokemonFormImg-Title">Edit image:</label>
                                &nbsp;&nbsp;
                                <input className="Customize-select-file" type="file"/>
                            </div>

                            <div className="submit-see-changes">
                                <button className="see-changes_button" type="submit">
                                    SUBMIT CHANGES
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="Customized-Pokemon-Card">
                        <h2 className="new-pokemon-card">new pokemon card</h2>
                        { <PokemonCard pokemon={changedCard} />}
                        <button className="SaveNewCardButton" onClick={saveChanges}>
                            SAVE CARD
                        </button>
                    </div>
                </div>
            </div>}

        </div>
    );
}
 
export default PokemonDetails;