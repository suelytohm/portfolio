import React from 'react'
import "./style.css"
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";


const Card = ({project,linkGit,description,link,tecnologias}) => {
  return (
    <div className='card'>
        <div className='textos-card'>
            <h3>{project}</h3>
            {/* <span>(Front-End)</span> */}
            <p>{description}</p>
        </div>
        <div className='footer-card'>
          {
            tecnologias.map((item, index) => {
              switch (item) {
                case "javascript":
                    return <FaJs size={"30px"} className="icones" key={index} />
                  case "html":
                    return <FaHtml5 size={"30px"} className="icones" key={index} />
                  case "css":
                    return <FaCss3Alt size={"30px"} className="icones" key={index} />
                  case "nodejs":
                    return <FaNode size={"30px"} className="icones" key={index} />
                  case "react":
                    return <FaReact size={"30px"} className="icones" key={index} />
                  case "mysql":
                    return <SiMysql size={"30px"} className="icones" key={index} />
                  case "mongodb":
                    return <SiMongodb size={"30px"} className="icones" key={index} />
              
                default:
                  return null
              }
            })
          }
            
            
            {/* <FaGithub size={"35px"} className="icones" /> */}
        </div>
        <a href={linkGit} target="_blank" rel="noopener noreferrer">Github</a>
        <a href={link} target="_blank" rel="noopener noreferrer">Ver Online</a>
    </div>
  )
}

export default Card