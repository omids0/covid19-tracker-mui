import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Header({data}) {
  return (
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
          // value={age}
          label="Select Country"
          // onChange={handleChange}
        >
        <MenuItem value={'wordwide'}>WordWide</MenuItem>
        {
              data.map(country => <MenuItem value={country.countryInfo._id}>{country.country}</MenuItem>)
        }
        </Select>
      </FormControl>
    </Stack>
  );
}
