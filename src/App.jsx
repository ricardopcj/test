import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <form>
          <input type="text" placeholder="E-Mail" name="name" />
          <input type="password" placeholder="Senha" name="pass" />
          <button className="btn">Logar</button>
        </form>
        <hr />
        <div className="Foot">
          <a className="App-link" href="#">
            Esqueci minha senha
          </a>
          <hr />
          <a className="App-link" href="#">
            Cadastre-se
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
