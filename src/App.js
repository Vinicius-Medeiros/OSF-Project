import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNewPokemon from './AddNewPokemon';
import PokemonDetails from './PokemonDetails';
import Downbar from './Downbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AddNewPokemon">
              <AddNewPokemon />
              <Downbar />
            </Route>
            <Route path="/pokemons/:id">
              <PokemonDetails />
              <Downbar />
            </Route>
          </Switch>
      </div>
    </ Router>
  );
}

export default App;