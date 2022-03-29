import './App.css';
import Clock from './components/Clock';
import Views from './Views';

/*
* Name: App
* Author(s): Leeden Raquel
* Inputs:
*   None
* Descption: the top most level of the app
* Returns:
*   component - the output component that represents the top level of the app
*/
function App() {
  return (
    <div className="App">
      <Clock />
      <br />
      <Views />
    </div>
  );
}

export default App;
