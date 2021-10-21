import Navbar from "../src/components/elements/nav/navbar";
import Container from "@mui/material/Container";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionTitle from "../src/components/elements/accordion/accordionTitle";
import AccordionInfo from "../src/components/elements/accordion/accordionInfo";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "../src/Link";
import Head from "next/head";
import TwoDimensionalGrid from "../src/components/elements/layout/twoDimensionalGrid";
import FourDimensionalGrid from "../src/components/elements/layout/fourDimensionalGrid";
import Carousel from "../src/components/elements/carousel/carousel.jsx";
import Breadcrumbs from "nextjs-breadcrumbs";
import Box from "@mui/material/Box";
import NavigationLayout from "../src/components/navigationLayout.jsx";
import SectionTitle from "../src/components/elements/typography/sectionTitle.jsx";
import SecondaryText from "../src/components/elements/typography/secondaryText.jsx";
import PrimaryText from "../src/components/elements/typography/primaryText.jsx";
import InfoIcon from "@mui/icons-material/Info";
import HorizontalCard from "../src/components/elements/card/horizontalCard.jsx";
import VerticalCard from "../src/components/elements/card/verticalCard.jsx";
import rad from "../src/static/images/rad.jpg";
import kajak from "../src/static/images/kajak.jpg";
import bewegung from "../src/static/images/bewegung.png";
import ernährung from "../src/static/images/ernährung.jpg";
import ActionSection from "../src/components/sections/actionSection";
import { useQuery } from "react-query";
import createMarkUp from "../src/utils/createMarkUp";
import Content from "../src/components/content";

export default function Bgm({ bgm_data }) {
  const { isLoading, data, error } = useQuery(
    "bgm_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/1?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: bgm_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<CorporateFareOutlinedIcon fontSize="large" />}
          pageTitle={"BETRIEBLICHES GESUNDHEITSMANAGEMENT"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<CorporateFareOutlinedIcon fontSize="large" />}
          pageTitle={"BETRIEBLICHES GESUNDHEITSMANAGEMENT"}
          action="error"
        />
      </>
    );

  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<CorporateFareOutlinedIcon fontSize="large" />}
        pageTitle={"BETRIEBLICHES GESUNDHEITSMANAGEMENT"}
      >
        <Container maxWidth="lg">
          <Carousel data={data.data.karussell} />
        </Container>
        <SectionTitle
          sx={{ marginTop: 10, marginBottom: 5, textAlign: "center" }}
        >
          Aktuelle BGM-Aktionen
        </SectionTitle>
        <Container maxWidth="md" sx={{ marginBottom: 10 }}>
          {data.data.news.map((data) => (
            <Accordion>
              <AccordionTitle data={data} />
              <AccordionInfo data={data} />
            </Accordion>
          ))}
        </Container>
        <TwoDimensionalGrid>
          {data.data.horizontal_karten.map((data) => (
            <>
              <Grid item xs={4} sm={8} md={8}>
                <HorizontalCard data={data} />
              </Grid>
            </>
          ))}
        </TwoDimensionalGrid>
        <FourDimensionalGrid>
          {data.data.vertikal_karten.map((data) => (
            <Grid item xs={4} sm={6} md={5} lg={6}>
              <VerticalCard data={data} />
            </Grid>
          ))}
        </FourDimensionalGrid>
        <Box
          sx={{
            marginTop: 5,
            boxShadow: 1,
            p: 4,
            backgroundColor: "white.main",
            borderRadius: 1,
          }}
        >
          <PrimaryText></PrimaryText>
          <Content content={createMarkUp(data.data.footer[0].content)} />
        </Box>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:8055/items/rubriken/1?fields=*.*.*`
  );
  const bgm_data = await res.json();

  return { props: { bgm_data } };
}
