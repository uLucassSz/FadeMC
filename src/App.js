import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './style.css';

import Home from './pages/Home/Home'
import Loja from "./pages/Loja/Loja";
import Forum from "./pages/Forum/Forum";
import Jogar from "./pages/Jogar/Jogar";
import Punicoes from "./pages/Punicoes/Punicoes";
import Equipe from "./pages/Equipe/Equipe";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/jogar" element={<Jogar />} />
          <Route path="/punicoes" element={<Punicoes />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
