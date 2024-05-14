import React from "react";
import "./style.css";

const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="titulo">
        <h2>Sobre mim</h2>
      </div>
      <div className="textos">
        <p>
          <strong>
            Sou um desenvolvedor fullstack com mais de 6 anos de experiência na
            criação de interfaces de usuário envolventes e intuitivas em vários
            projetos.
          </strong>
        </p>
        <p>
          Eu sou altamente apaixonado por trabalhar com as últimas tecnologias e
          os padrões de projetos para criar soluções de alta qualidade. Já
          participei de vários projetos utilizando as tecnologias HTML, CSS,
          Javascript, PHP, Python, C#, Java, Delphi. Atualmente estou migrando
          meus projetos para tecnologias modernas, como Typescript, React,
          NodeJS e outras tecnologias mais robustas e dinâmicas. Além disso, sou
          altamente colaborativo e continuamente focado em aprimorar minhas
          habilidades por meio do aprendizado constante e da participação em
          comunidades de desenvolvimento. Sempre busco novos desafios e
          oportunidades para contribuir com meu conhecimento e experiência em
          equipes dinâmicas de desenvolvimento de software.
        </p>
        {/* <p><strong>Sou um desenvolvedor fullstack com mais de 6 anos de experiência na criação de interfaces de usuário envolventes e intuitivas em vários projetos.</strong></p>
        <p>Eu sou altamente apaixonado por trabalhar com as últimas tecnologias e os padrões de projetos para criar soluções de alta qualidade. Já participei de vários projetos utilizando as tecnologias HTML, CSS, Javascript, PHP, Python, C#, Java, Delphi. Atualmente estou migrando meus projetos para tecnologias modernas, como Typescript, React, NodeJS e outras tecnologias mais robustas e dinâmicas. Além disso, sou altamente colaborativo e continuamente focado em aprimorar minhas habilidades por meio do aprendizado constante e da participação em comunidades de desenvolvimento. Sempre busco novos desafios e oportunidades para contribuir com meu conhecimento e experiência em equipes dinâmicas de desenvolvimento de software.</p> */}
      </div>
    </section>
  );
};

export default Sobre;
