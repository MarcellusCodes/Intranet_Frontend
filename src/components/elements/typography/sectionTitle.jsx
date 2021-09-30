import { Typography } from "@mui/material";

const SectionTitle = ({ children, sx }) => {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        color="text.primary"
        sx={sx}
        my={5}
      >
        {children}
      </Typography>
    </>
  );
};

export default SectionTitle;
