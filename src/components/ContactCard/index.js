import React from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./style.css";

const ContactCard = ({ contato }) => {
  return (
    <>
      {contato && contato === "E-mail" ? (
        <>
          <a
            target="_blank"
            href="mailto:suelytohm.02@gmail.com?subject=Contato pelo portfólio"
            rel="noreferrer"
          >
            <div className="buttonContato">
              <CiMail className="icons" size="30px" />
              <h3>{contato}</h3>
            </div>
          </a>
        </>
      ) : (
        <></>
      )}
      {contato && contato === "WhatsApp" ? (
        <>
          <a target="_blank" href="https://wa.me/558791087013" rel="noreferrer">
            <div className="buttonContato">
              <FaWhatsapp className="icons" size="30px" />
              <h3>{contato}</h3>
            </div>
          </a>
        </>
      ) : (
        <></>
      )}
      {contato && contato === "GitHub" ? (
        <>
          <a
            target="_blank"
            href="https://github.com/suelytohm"
            rel="noreferrer"
          >
            <div className="buttonContato">
              <FaGithub className="icons" size="30px" />
              <h3>{contato}</h3>
            </div>
          </a>
        </>
      ) : (
        <></>
      )}
      {contato && contato === "LinkedIn" ? (
        <>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/suelytohm"
            rel="noreferrer"
          >
            <div className="buttonContato">
              <FaLinkedin className="icons" size="30px" />
              <h3>{contato}</h3>
            </div>
          </a>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ContactCard;
