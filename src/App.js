import { useEffect, useState } from "react";
import "./App.css";
import CovidTracker from "./components/CovidTracker";

function App() {
  const [countriesData, setcountriesData] = useState([])

  useEffect(() => {
    const getAllCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          setcountriesData(data)
        });
    };

    getAllCountries()
  }, []);

  return (
    <div className="App">
      <CovidTracker data={countriesData}/>
    </div>
  );
}

export default App;
