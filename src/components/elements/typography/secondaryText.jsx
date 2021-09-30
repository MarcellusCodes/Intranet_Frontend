import { Typography } from "@mui/material";

const SecondaryText = ({ children, sx }) => {
  return (
    <>
      <Typography variant="body2" color="text.primary" sx={sx}>
        {children}
      </Typography>
    </>
  );
};

export default SecondaryText;
