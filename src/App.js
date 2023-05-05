import logo from "./tom.png";
import "./App.css";
import Footer from "./components/Footer";
import Portfolio from "./Pages/Portfolio";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-header">
          <h1>Olá! Meu nome é Suelytohm</h1>
          <p>Sou um desenvolvedor Front-End e estou em busca de aplicar meus conhecimentos, visando criar experiências excepcionais para os usuários.</p>
        </div>
        <img src={logo} className="img-header" alt="logo" />
      </header>
      <main>
          <Portfolio />
          <Sobre />
          <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
