import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App🌈</h1>
        <Search />
      </header>
      <h3>
        This project is open-sourced and can be found at my{" "}
        <a href="https://github.com/DanielleHards/weather-react" alt="">
          GitHub Repository
        </a>
      </h3>
    </div>
  );
}

export default App;
