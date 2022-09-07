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
      <h1>{nasaData.title}</h1>
      <h2>{nasaData.date}</h2>
      <img src={nasaData.url} alt="" />
    </div>
  );
}

export default App;
