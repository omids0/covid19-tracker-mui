import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Map from "./leftComponents/Map";

export default function LeftSide({ data }) {
  const [selectedCountry, setselectedCountry] = useState("wordwide");
  const [countryInfo, setcountryInfo] = useState([]);

  useEffect(() => {
    if (selectedCountry === "wordwide") {
      const getWordWideInfo = async () => {
        await fetch("https://disease.sh/v3/covid-19/all")
          .then((response) => response.json())
          .then((resData) => {
            setcountryInfo(resData);
          });
      };

      getWordWideInfo();
    } else {
      const getCountryInfo = async () => {
        await fetch(
          `https://disease.sh/v3/covid-19/countries/${selectedCountry}`
        )
          .then((response) => response.json())
          .then((resData) => {
            setcountryInfo(resData);
          });
      };
      getCountryInfo();
    }
  }, [selectedCountry]);

  return (
    <Stack px={1}>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h5"
          component="h1"
          color="#ff0000"
          sx={{ fontWeight: "bold" }}
        >
          COVID-19 TRACKER
        </Typography>
        <FormControl sx={{ minWidth: "11rem", maxWidth: "12rem" }}>
          <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCountry}
            label="Select Country"
            onChange={(e) => setselectedCountry(e.target.value)}
          >
            <MenuItem value={"wordwide"}>WordWide</MenuItem>
            {data.length > 0 &&
              data.map((country) => (
                <MenuItem value={country.country} key={country.countryInfo._id}>
                  {country.country}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Stack>
      <Stack my={2}>
        <Grid
          container
          spacing={1}
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                padding: ".5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Coronavirus Cases
              </Typography>
              <Typography variant="h6" color="#cc0000">
                +{countryInfo.todayCases}
              </Typography>
              <Typography variant="subtitle2">
                +{countryInfo.cases} Toltal
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                padding: ".5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Recovered
              </Typography>
              <Typography variant="h6" color="#00ff00">
                +{countryInfo.todayRecovered}
              </Typography>
              <Typography variant="subtitle2">
                +{countryInfo.recovered} Toltal
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                padding: ".5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Deaths
              </Typography>
              <Typography variant="h6" color="#cc0000">
                +{countryInfo.todayDeaths}
              </Typography>
              <Typography variant="subtitle2">
                +{countryInfo.deaths} Toltal
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Stack>
      <Map />
    </Stack>
  );
}
