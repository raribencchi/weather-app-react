import './App.css';
import WeatherSearch from './WeatherSearch';
import axios from "axios";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Weather Search App</h1>
        <WeatherSearch/>
        </header>
      </div>
  );
}
export default App;
