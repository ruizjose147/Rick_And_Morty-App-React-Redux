import React from "react";

const NavBar = () => {
    return (
      <nav class="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
            Rick and Morty App
          </a>
          <a className="navbar-brand " href="/" >Personajes</a>
          <a  className="navbar-brand " href="/episodios">Episodios</a>
        </div>
      </nav>
    );
  };

export default NavBar;