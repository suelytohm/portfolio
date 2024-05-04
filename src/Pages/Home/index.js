import React from "react";
import "./style.css";
import logo from "../../assets/tom.png";

import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Home = () => {
  return (
    <header id="home">
      <div className="text-header">
        <h1>Olá! Meu nome é Suelytohm</h1>
        <p>
          Sou um desenvolvedor Front-End e estou em busca de aplicar meus
          conhecimentos, <br />
          visando criar experiências excepcionais para os usuários.
        </p>
        <FaHtml5 size="50px" className="icone" />
        <FaCss3Alt size="50px" className="icone" />
        <FaJs size="50px" className="icone" />
        <FaNode size="50px" className="icone" />
        <FaReact size="50px" className="icone" />
	<FaJava size="50px" className="icone" />
	<FaPhp size="50px" className="icone" />
        <SiMongodb size="50px" className="icone" />
        <SiMysql size="50px" className="icone" />
        <FaGithub size="50px" className="icone" />
      </div>
      <img src={logo} className="img-header" alt="logo" />
    </header>
  );
};

export default Home;
