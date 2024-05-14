import React from "react";
import "./style.css";
import ContactCard from "../../components/ContactCard";

const Contato = () => {
  return (
    <section className="contato" id="contato">
      <h2>Contato</h2>
      <div className="list-contato">
        <ContactCard contato={"WhatsApp"} />
        <ContactCard contato={"E-mail"} />
        <ContactCard contato={"GitHub"} />
        <ContactCard contato={"LinkedIn"} />
      </div>
      <p>
        {/* Visite{" "}
        <a
          href="https://github.com/suelytohm"
          target="_blank"
          rel="noopener noreferrer"
        >
          meu Github
        </a>
        , ou me siga nas redes sociais:{" "}
        <a
          href="https://www.linkedin.com/in/suelytohm-oliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        e{" "}
        <a
          href="https://www.instagram.com/t22suelytohm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a> */}
        .
      </p>
    </section>
  );
};

export default Contato;
