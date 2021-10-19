import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h2 className="navbar-title">
          Welcome! To your PokeWeb
        </h2>
        <div className = "imgNavbar">
            <img src="/images/navbarImages/pokemonballLeft.png" alt="pokemon ball"/>
            <img src="/images/navbarImages/pokemonTitle.png" alt="pokemon title"/>
            <img src="/images/navbarImages/pokemonball.png" alt="pokemon ball"/>
        </div>
          <Link to="/"><h2 className="home-link">
            Home
          </h2></Link>
          &nbsp; &nbsp;
          <Link to="/AddNewPokemon"><h2 className="add-link">
            Add new pokemons
          </h2></Link>
      </nav>
    );
  }

  export default Navbar;
