import React from "react";
import Box from "@mui/material/Box";
import PrimaryTitle from "../typography/primaryTitle";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingState = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white.main",
        textAlign: "center",
        p: 4,
        width: 250,
        height: 250,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <PrimaryTitle>Lade Daten...</PrimaryTitle>
      <CircularProgress color="primary" sx={{ marginTop: 5 }} />
    </Box>
  );
};

export default LoadingState;
