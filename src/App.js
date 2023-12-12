import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header mt-5">
        <h1>
          Your <br />
          <a href="/">
            <em
              style={{
                color: "#ffffff",
                backgroundColor: "#00128a",
                padding: "5px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              dictionary
            </em>
          </a>{" "}
          <br />
          guide
        </h1>
      </header>
      <div className="container ">
        <Dictionary defaultKeyword="space" />
      </div>
      <footer className="container">
        <small>
          This project was coded by Julia Atamas and is{" "}
          <a
            href="https://github.com/aeueoe/weather_app_react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://main--unrivaled-speculoos-631d40.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
