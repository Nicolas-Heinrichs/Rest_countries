import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState([]);

  const getCountries = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
    setCountries(data);
    setCountriesFilter(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div
      className={`h-full min-h-screen w-screen bg-Very-Light-Gray-L-Bg text-Very-Dark-Blue-L-Text dark:bg-Very-Dark-Blue-D-Bg dark:text-White`}
    >
      <Header />
      <div className="my-[4vh] flex h-[8vh] w-full flex-col sm:flex-row">
        <SearchBar
          countries={countries}
          setCountriesFilter={setCountriesFilter}
        />
        <FilterBar
          countries={countries}
          setCountriesFilter={setCountriesFilter}
        />
      </div>
      <Countries countriesFilter={countriesFilter} />
    </div>
  );
}

export default App;
