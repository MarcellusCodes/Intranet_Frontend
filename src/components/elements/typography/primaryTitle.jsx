import { Typography } from "@mui/material";

const PrimaryTitle = ({ children }) => {
  return (
    <>
      <Typography component="h4" variant="h5">
        {children}
      </Typography>
    </>
  );
};

export default PrimaryTitle;
