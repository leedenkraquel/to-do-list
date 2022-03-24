import logo from './logo.svg';
import './App.css';

function alertTest(){
  alert("test");
  return true;
}

function formSubmit() {
  console.log('You clicked submit.');
  return true;
}

// This is the landing page of the application.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={alertTest}>Button</button>
        <form onSubmit={formSubmit}>
          <button type="submit">Submit</button>
        </form>
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
      </header>
    </div>
  );
}

export default App;
