import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import "./App.css";
import StatsComp from "./StatsComp";
import Map from "./Map";
import VaccineTable from "./VaccineTable";
//import { useHistory } from "react-router-dom";

function App() {
  const [countries, initCountries] = useState([]);
  //To Capture the selected value in dropdown
  const [country, initCountry] = useState("Universe");
  const [countryInfo, initCountryInfo] = useState([]);
  const [vaccineInfo, initVaccineInfo] = useState([]);
  const [vaccinePhases, initVaccinePhases] = useState([]);

  //const history = useHistory();

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        initCountryInfo(data);
      });
  }, []);

  //hook - use async always for api calls
  useEffect(() => {
    const getCntryData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            flag: <img src={country.countryInfo.flag} alt="countryFlag" />,
          }));
          initCountries(countries);
        });
    };

    getCntryData();
  }, []);

  useEffect(() => {
    const getVaccineData = async () => {
      fetch("https://disease.sh/v3/covid-19/vaccine")
        .then((response) => response.json())
        .then((data) => {
          initVaccineInfo(data);
          initVaccinePhases(data.phases);
        });
    };
    getVaccineData();
  }, []);

  console.log("VaccinePhases ::: ", vaccinePhases);
  //Listener
  const listenCountrySelect = async (event) => {
    const countryValue = event.target.value;
    initCountry(countryValue);

    const url =
      countryValue === "Universe"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryValue}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        initCountry(countryValue);
        initCountryInfo(data);
      });
  };

  console.log("URL :::: ", countryInfo);
  console.log("Vcccinee :::", vaccineInfo);
  return (
    <div className="app">
      <div className="HC__left">
        <div className="HC__Header">
          {/*Title of the Website*/}
          <h1>Honest Covid</h1>
        </div>

        {/* Countries Dropdown for viewing information */}
        <FormControl className="HC__countries__dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={listenCountrySelect}
            className="HC__select"
          >
            {/*This will give all countries aggregate value*/}
            <MenuItem value="Universe" className="HC__menuitem">
              Universe
            </MenuItem>

            {/* Here we map through all countries and display a menuitem individually*/}
            {countries.map((country) => (
              <MenuItem value={country.value} className="HC__menuitem">
                {" "}
                {country.flag} {country.name}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="HC__statistics">
          <StatsComp
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <StatsComp
            title="Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <StatsComp
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>

        <Map />
      </div>

      {/* Here comes vaccine status and video*/}
      <Card className="HC__right">
        <CardContent>
          <h3> Vaccine Status</h3>
          <VaccineTable vaccines={vaccinePhases} />
          <h3> Good Practices during COVID</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
