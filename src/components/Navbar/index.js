import React from 'react'
import "./style.css"

const Navbar = () => {
  return (
    <nav class="navbar" id="navbar">
      <div class="navbar-toggle" onclick="toggleNavbar()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar-list">
        <li><a href="#home">Início</a></li>
        <li><a href="#portfolio">Projetos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>

  )
}

export default Navbar