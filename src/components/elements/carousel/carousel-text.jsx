import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "../../../Link";
import PrimaryText from "../typography/primaryText";

const CarouselText = ({ title, caption, link }) => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          height: "auto",
          width: "100%",
          background: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography variant="h6" component="h4">
          {title}
        </Typography>
        <PrimaryText sx={{ textAlign: "center" }}>{caption}</PrimaryText>
        <Link href={link}>
          <Button variant="contained">Hier Klicken</Button>
        </Link>
      </Stack>
    </>
  );
};

export default CarouselText;
