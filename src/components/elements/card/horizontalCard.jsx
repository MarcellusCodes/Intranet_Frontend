import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "../../../Link";
import PrimaryTitle from "../typography/primaryTitle";
import PrimaryText from "../typography/primaryText";
import Scrollbar from "../scrollbar";
import CtaButton from "../btn/ctaButton";

const HorizontalCard = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: 1,
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Image
            src={data.image}
            alt={"Card Image"}
            layout="responsive"
            width="100%"
            height="100%"
            className={{ height: "100%", width: "100%" }}
          />
        </Box>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", width: "60%", p: 3 }}
        >
          <PrimaryTitle>{data.title}</PrimaryTitle>
          <Scrollbar maxHeight={140}>
            <PrimaryText>{data.text}</PrimaryText>
          </Scrollbar>
          <CtaButton cta={data.cta} href={data.href} variant="contained" />
        </CardContent>
      </Card>
    </>
  );
};

export default HorizontalCard;