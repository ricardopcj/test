import logo from "./logo.png";
import "./App.css";

function SingUp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <form>
          <input type="text" placeholder="E-Mail" name="name" />
          <input type="submit" value="Redefinir" />
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default SingUp;
