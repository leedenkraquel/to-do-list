import logo from './logo.svg';
import './App.css';

// This is the landing page of the application.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>this is a test</p>
        <p>this is another test</p>
        <p>last test hopefully</p>
      </header>
    </div>
  );
}

export default App;
