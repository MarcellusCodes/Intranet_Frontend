import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import PrimaryTitle from "../typography/primaryTitle";
import Scrollbar from "../scrollbar";
import CtaButton from "../btn/ctaButton";
import Content from "../../content";
import createMarkUp from "../../../utils/createMarkUp";

const HorizontalCard = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "40%", p: 3 }}>
          <Image
            src={`http://localhost:8055/assets/${data.image.filename_disk}`}
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
          <PrimaryTitle>{data.titel}</PrimaryTitle>
          <Scrollbar maxHeight={140}>
            <Content content={createMarkUp(data.content)} />
          </Scrollbar>
          <CtaButton cta={data.cta} href={data.href} variant="contained" />
        </CardContent>
      </Card>
    </>
  );
};

export default HorizontalCard;
