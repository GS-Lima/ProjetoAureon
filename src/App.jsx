import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn"; // nome do arquivo está "signIn.jsx"

function App() {
  return (
    <Router>
      <Routes>
        {/* rota principal */}
        <Route path="/" element={<Home />} />

        {/* rota de login/cadastro */}
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
