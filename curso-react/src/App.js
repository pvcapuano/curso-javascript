import { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);
  const [user, setUser] = useState({});

  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }
    loadApi();
  }, []);

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

      <div>
        {nutri.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <h1>{item.categoria}</h1>
              <a>acessar</a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;
