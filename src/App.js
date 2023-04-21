import './App.css';
import WeatherSearch from './WeatherSearch';
import axios from "axios";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Weather Search App</h1>
        <WeatherSearch/>
        <p>  <strong class="mycode">
        <a href = "https://github.com/raribencchi/weather-app-react" target="_blank">
        Open Source Code by: </a>  Rashmi Aribenchi </strong></p>
        </header>
     </div>
  );
}
export default App;
