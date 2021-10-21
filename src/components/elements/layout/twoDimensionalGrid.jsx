import Grid from "@mui/material/Grid";

const TwoDimensionalGrid = ({ children, sx }) => {
  return (
    <>
      <Grid container spacing={4} sx={sx} columns={{ xs: 4, sm: 8, md: 16 }}>
        {children}
      </Grid>
    </>
  );
};

export default TwoDimensionalGrid;
