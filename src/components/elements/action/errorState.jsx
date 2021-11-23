import React from "react";
import Box from "@mui/material/Box";
import PrimaryTitle from "../typography/primaryTitle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const ErrorState = () => {
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
      <PrimaryTitle>Problem beim Laden der Daten...</PrimaryTitle>
      <ErrorOutlineOutlinedIcon
        color="error"
        sx={{ marginTop: 5 }}
        sx={{ fontSize: 50 }}
      />
    </Box>
  );
};

export default ErrorState;
