import Grid from "@mui/material/Grid";

const FiveDimensionalGrid = ({ children, marginTop }) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        columns={{ xs: 5, sm: 15, md: 20, lg: 30 }}
        sx={{ marginTop: marginTop }}
      >
        {children}
      </Grid>
    </>
  );
};

export default FiveDimensionalGrid;
