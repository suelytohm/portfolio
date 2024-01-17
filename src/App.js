import "./App.css";
import Footer from "./components/Footer";
import Portfolio from "./Pages/Portfolio";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
// import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
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
