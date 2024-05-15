import React from "react";
import "./style.css";
import logo from "../../assets/tom.png";

import { DiJsBadge } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
// import { FaDocker } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
// import ContactCard from "../../components/ContactCard";

const Home = () => {
  return (
    <header id="home">
      <div className="text-header">
        <h1>Olá! Meu nome é Suelytohm</h1>
        <p>
          Eu sou Desenvolvedor FullStack.
          <br />
          <br />
          Eu estou em busca de aprimorar e de aplicar os meus conhecimentos em
          novos projetos.
          <br />
          <br />
          O meu objetivo profissional é proporcionar uma experiência excepcional
          para os usuários.
          <br />
          <br />
          Eu tenho mais de 6 anos de experiência em tecnologias, como:
        </p>

        <div className="icons">
          <FaHtml5
            size="45px"
            className="icone FaHtml5"
            data-tooltip-id="FaHtml5"
          />
          <FaCss3Alt
            size="45px"
            className="icone FaCss3Alt"
            data-tooltip-id="FaCss3Alt"
          />
          <DiJsBadge
            size="42px"
            className="icone DiJsBadge"
            data-tooltip-id="DiJsBadge"
          />
          <SiTypescript
            size="42px"
            className="icone SiTypescript"
            data-tooltip-id="SiTypescript"
          />
          <FaReact
            size="45px"
            className="icone FaReact"
            data-tooltip-id="FaReact"
          />
          <FaBootstrap
            size="45px"
            className="icone FaBootstrap"
            data-tooltip-id="FaBootstrap"
          />
          <FaPython
            size="45px"
            className="icone FaPython"
            data-tooltip-id="FaPython"
          />
          <FaNode
            size="45px"
            className="icone FaNode"
            data-tooltip-id="FaNode"
          />
          <FaJava
            size="45px"
            className="icone FaJava"
            data-tooltip-id="FaJava"
          />
          <FaPhp size="45px" className="icone FaPhp" data-tooltip-id="FaPhp" />
          <FaAndroid
            size="45px"
            className="icone FaAndroid"
            data-tooltip-id="FaAndroid"
          />
          <SiMysql
            size="45px"
            className="icone SiMysql"
            data-tooltip-id="SiMysql"
          />
          <DiPostgresql
            size="45px"
            className="icone DiPostgresql"
            data-tooltip-id="DiPostgresql"
          />
          <SiMongodb
            size="45px"
            className="icone SiMongodb"
            data-tooltip-id="SiMongodb"
          />
          <DiRedis
            size="50px"
            className="icone DiRedis"
            data-tooltip-id="DiRedis"
          />
          <FaGithub
            size="45px"
            className="icone github"
            data-tooltip-id="github"
          />
          {/* <FaDocker size="45px" className="icone" /> */}
          <ReactTooltip
            id="FaHtml5"
            place="bottom"
            variant="light"
            content="HTML5"
          />
          <ReactTooltip
            id="FaCss3Alt"
            place="bottom"
            variant="light"
            content="CSS3"
          />
          <ReactTooltip
            id="DiJsBadge"
            place="bottom"
            variant="light"
            content="JavaScript"
          />
          <ReactTooltip
            id="SiTypescript"
            place="bottom"
            variant="light"
            content="Typescript"
          />
          <ReactTooltip
            id="FaBootstrap"
            place="bottom"
            variant="light"
            content="Bootstrap"
          />
          <ReactTooltip
            id="FaNode"
            place="bottom"
            variant="light"
            content="NodeJS"
          />
          <ReactTooltip
            id="FaPython"
            place="bottom"
            variant="light"
            content="Python"
          />
          <ReactTooltip
            id="FaPhp"
            place="bottom"
            variant="light"
            content="PHP"
          />
          <ReactTooltip
            id="FaJava"
            place="bottom"
            variant="light"
            content="Java"
          />
          <ReactTooltip
            id="FaAndroid"
            place="bottom"
            variant="light"
            content="Android"
          />
          <ReactTooltip
            id="FaReact"
            place="bottom"
            variant="light"
            content="React"
          />
          <ReactTooltip
            id="SiMongodb"
            place="bottom"
            variant="light"
            content="MongoDB"
          />
          <ReactTooltip
            id="SiMysql"
            place="bottom"
            variant="light"
            content="MySQL"
          />
          <ReactTooltip
            id="DiPostgresql"
            place="bottom"
            variant="light"
            content="PostgreSQL"
          />
          <ReactTooltip
            id="DiRedis"
            place="bottom"
            variant="light"
            content="Redis"
          />
          <ReactTooltip
            id="github"
            place="bottom"
            variant="light"
            content="GitHub"
          />
        </div>
        {/* <div className="btnContatos">
          <ContactCard contato={"WhatsApp"} />
          <ContactCard contato={"GitHub"} />
          <ContactCard contato={"LinkedIn"} />
        </div> */}
      </div>
      <img src={logo} className="img-header" alt="logo" />
    </header>
  );
};

export default Home;
