import Grid from "@mui/material/Grid";

const ThreeDimensionalGrid = ({ children }) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        columns={{ xs: 4, sm: 10, md: 16, lg: 21 }}
        sx={{ marginTop: 5 }}
      >
        {children}
      </Grid>
    </>
  );
};

export default ThreeDimensionalGrid;
