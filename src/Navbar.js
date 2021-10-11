
const Navbar = () => {
    return (
      <nav className="navbar">
        <h2 className="navbar-title">Welcome! To your PokeWeb</h2>
        <div className = "imgNavbar">
            <img src="./images/navbarImages/pokemonballLeft.png" alt="pokemon ball"/>
            <img src="./images/navbarImages/pokemonTitle.png" alt="pokemon title"/>
            <img src="./images/navbarImages/pokemonball.png" alt="pokemon ball"/>
        </div>
          <a href="/create"><h2 className="home-link">Home</h2></a>
          <a href="/create"><h2 className="add-link">Add new pokemons</h2></a>
      </nav>
    );
  }
   
  export default Navbar;