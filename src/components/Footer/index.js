import React from 'react'
import "./style.css"


const Footer = () => {
  const date = new Date()
  const ano = date.getFullYear()

  return (
    <footer>
        <p>Suelytohm Oliveira © {ano}- Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer