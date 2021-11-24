import "./App.css";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Detalhes from "./pages/Detalhes";
import Editar from "./pages/Editar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
