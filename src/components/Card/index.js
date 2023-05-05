import React from 'react'
import "./style.css"


const Card = ({project,description,link}) => {
  return (
    <div className='card'>
        <div className='textos-card'>
            <h3>{project}</h3>
            <p>{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">Acessar</a>
    </div>
  )
}

export default Card