import Grid from "@mui/material/Grid";

const FourDimensionalGrid = ({ children }) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        columns={{ xs: 4, sm: 12, md: 15, lg: 24 }}
        sx={{ marginTop: 5 }}
      >
        {children}
      </Grid>
    </>
  );
};

export default FourDimensionalGrid;
