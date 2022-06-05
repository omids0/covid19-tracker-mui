import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function RightSide({ data }) {
  const columns = [
    { field: "countryName", headerName: "Country", width: 100 },
    { field: "cases", headerName: "Cases", width: 60 },
    { field: "recovered", headerName: "Recovered", width: 85 },
    { field: "deaths", headerName: "Deaths", width: 65 },
  ];

  const dataRows = data.map(
    (item) => 
    {
      return {
        'id': `${item.countryInfo._id}`,
        'countryName': `${item.country}`,
        'cases': `${item.todayCases}`,
        'recovered': `${item.todayRecovered}`,
        'deaths': `${item.todayDeaths}`
      }
    }
  );

  return (
    <Stack px={1} bgcolor='#ffffff' py={1} sx={{ minHeight: "700px" }}>
      <DataGrid
        rows={dataRows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Stack>
  );
}
