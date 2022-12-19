import { useState } from "react";
import Nomes from "./components/Nomes";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);
  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    setUser({
      name: nome,
      email: email,
      idade: idade,
    });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleRegister}>
          <label>Nome</label>
          <input
            placeholder="seu nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>idade</label>
          <input
            placeholder="sua idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>

      <div>
        <span>nome: {user.nome}</span>
        <span>idade: {user.idade}</span>
        <span>email: {user.email}</span>
      </div>
    </div>
  );
}

export default App;
