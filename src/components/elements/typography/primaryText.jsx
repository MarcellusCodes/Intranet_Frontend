import { Typography } from "@mui/material";

const PrimaryText = ({ children, sx, classNames }) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        color="text.primary"
        component="paragraph"
        sx={sx}
        classNames={classNames}
      >
        {children}
      </Typography>
    </>
  );
};

export default PrimaryText;
