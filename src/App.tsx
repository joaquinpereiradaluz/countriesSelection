import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const countriesSelection = [
    { value: "-1", label: "Select All", checked: false },
    { value: "in", label: "India", checked: false },
    { value: "us", label: "USA", checked: false },
    { value: "fr", label: "France", checked: false },
  ];
  const [selectedCountries, setSelectedCountries] =
    useState(countriesSelection);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "-1") {
      setSelectedCountries(
        selectedCountries.map((country) => {
          return { ...country, checked: e.target.checked };
        })
      );
    } else {
      const updatedCountries = selectedCountries.map((country) => {
        if (country.value === "-1" && !e.target.checked) {
          return { ...country, checked: false };
        }
        if (country.value === e.target.value) {
          return { ...country, checked: e.target.checked };
        }
        return country;
      });

      const allCountriesSelected = updatedCountries
        .slice(1)
        .every((country) => country.checked);
      updatedCountries[0].checked = allCountriesSelected;

      setSelectedCountries(updatedCountries);
    }
  };
  return (
    <>
      <h1>Countries Selection</h1>

      <div className="countrySelection">
        {selectedCountries.map((country) => (
          <label key={country.value}>
            <input
              type="checkbox"
              value={country.value}
              checked={country.checked}
              onChange={handleCheck}
            />
            {country.label}
          </label>
        ))}
      </div>
    </>
  );
}

export default App;
