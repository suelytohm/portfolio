import React from 'react'
import Card from '../../components/Card'
import "./style.css"

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      project: "dotflix",
      description: "Sistema fictício de uma possível locadora de filmes, onde são exibidos os filmes mais recentes e suas características, através do consumo da API do TheMovieDb.",
      link: "https://illustrious-panda-b7bf28.netlify.app/",
      linkGit: "https://github.com/suelytohm/desafio-dot",
      tecnologias : ["html","css","javascript","react"]
    },
    {
      id: 2,
      project: "oktext",
      description: "Um editor de textos, que pode ser acessado de forma online. Muito útil para o compartilhamento de links entre dispositivos.",
      link: "https://react-texto.vercel.app/",
      linkGit: "https://github.com/suelytohm/react-texto",
      tecnologias : ["html","css","javascript","react","nodejs"]
    },
    {
      id: 3,
      project: "cortapreço",
      description: "Gerenciador de grupos de whatsapp 100% autônomo, com envio de mensagens, fotos e links, tais como promoções, cupons de descontos e ofertas diretas.",
      link: "https://lnk.bio/OfertasEPomocoes",
      linkGit: "",
      tecnologias : ["html","css","javascript","react","nodejs"]
    },
    {
      id: 4,
      project: "top crypto",
      description: "Listagem e monitoramento em tempo real das criptomoedas mais negociadas nas últimas 24 horas, utilizando a API pública do Coincap.",
      link: "https://splendorous-croissant-1a154a.netlify.app/",
      linkGit: "https://github.com/suelytohm/crypto",
      tecnologias : ["html","css","javascript","react"]
    },
    {
      id: 5,
      project: "JordanShoes",
      description: "E-commerce da loja JordanShoes, revendedor oficial dos tênis colecionáveis Nike Air Jordan. O desafio da estilização foi proposto pela comunidade codelândia.",
      link: "https://jordanshoes-shop.netlify.app/",
      linkGit: "https://github.com/suelytohm/codelandia-desafio02",
      tecnologias : ["html","css","javascript","react"]
    },
    {
      id: 6,
      project: "Blog Codelândia",
      description: "Estilização e consulta das postagens do blog Tabnews. O desafio da estilização foi proposto pela comunidade codelândia e tomei a liberdade de implementar a consulta das postagens, afim de deixar o blog dinâmico.",
      link: "https://codelandia01-blog.netlify.app/",
      linkGit: "https://github.com/suelytohm/codelandia-desafio01",
      tecnologias : ["html","css","javascript","react"]
    }
  ]

  return (
    <section className='portfolio'>
      <div className='titulo'>
        <h2>Esses são alguns dos meus projetos</h2>
        {/* <p>Todos eles estão disponíveis no meu <a href="https://github.com/suelytohm" target="_blank" rel="noopener noreferrer">Github</a></p> */}
      </div>
      <div className='projetos'>
        {
          projects.map((item) => (
            <Card key={item.id} linkGit={item.linkGit} project={item.project} description={item.description} link={item.link} tecnologias={item.tecnologias} />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio