import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const api_key = "xGfnB1uVfQz4heMQqZ3AbgmNtioSieeDofSseP9X";
  const [nasaData, setnasaData] = useState({});

  useEffect(function () {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setnasaData(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(nasaData);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="column1">
          <p>NASA Picture of the day</p>
          <h1>{nasaData.title}</h1>
          <p>{nasaData.explanation}</p>
          <h3>
            Click{" "}
            <span>
              <a href={nasaData.hdurl}>here</a>
            </span>{" "}
            for the HD Version.
          </h3>
        </div>
        <div className="column2">
          <img src={nasaData.url} alt="" />
          <h2>Publication date: {nasaData.date}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
