import { Typography } from "@mui/material";

const SecondaryTitle = ({ children }) => {
  return (
    <>
      <Typography component="h5" variant="h6">
        {children}
      </Typography>
    </>
  );
};

export default SecondaryTitle;
