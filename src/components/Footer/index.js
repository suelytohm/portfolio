import React, {useState} from 'react'
import "./style.css"


const Footer = () => {
  const date = new Date()

  const [data, setData] = useState(date.getFullYear())

  return (
    <footer>
        <p>Suelytohm Oliveira © {data}- Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer