import { Card, CardMedia, Stack } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <Stack p={.8} bgcolor="#ffffff" my={2} sx={{ borderRadius: 3 }}>
      <img
        src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="COVID-19 Tracker map"
        loading="lazy"
      />
    </Stack>
  );
}
