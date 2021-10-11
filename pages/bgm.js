import Navbar from "../src/components/elements/nav/navbar";
import Container from "@mui/material/Container";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "../src/Link";
import Head from "next/head";

import Carousel from "../src/components/elements/carousel/carousel.jsx";
import Breadcrumbs from "nextjs-breadcrumbs";
import Box from "@mui/material/Box";
import NavigationLayout from "../src/components/navigationLayout.jsx";
import SectionTitle from "../src/components/elements/typography/sectionTitle.jsx";
import SecondaryText from "../src/components/elements/typography/secondaryText.jsx";
import PrimaryText from "../src/components/elements/typography/primaryText.jsx";
import InfoIcon from "@mui/icons-material/Info";
import AccordionContainer from "../src/components/elements/accordion/accordionContainer.jsx";
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
  const accordion_data = [
    {
      id: 1,
      info: "Die DRK Bewegungskurse können nun endlich wieder stattfinden. Dies ist jedoch mit folgenden Auflagen verbunden. Die Auflagen finden Sie in ausführlicher Form hier. In dem Reiter „DRK-Bewegungskurse“ finden Sie die aktuellen Bewegungsangebote, Termine und Zeiten. Falls Sie sich für einen oder mehrere der Kurse interessieren, melden Sie sich bitte über das BGM an.",
      href: "/",
      cta: "Hier klicken",
    },
    {
      id: 2,
      info: "Auch ist es weiterhin möglich, online zu trainieren – mit CYBERFITNESS. Dank der BARMER für Sie als Mitarbeiter/in kostenlos. Alle Informationen zur Anmeldung finden Sie hier",
      href: "",
      cta: "",
    },
    {
      id: 3,
      info: "Die Fitnessstudios Clever Fit und FitX sind wieder geöffnet. Achten Sie auf die Auflagen. Diese finden Sie auf deren jeweiligen Homepages.",
      href: "",
      cta: "",
    },
    {
      id: 4,
      info: "Das Fitnessstudio FitnessFirst ist dauerhaft geschlossen und öffnet nicht mehr.",
      href: "",
      cta: "",
    },
    {
      id: 5,
      info: "Die Gesundheitsanbieter PSV Rostock e. V. und HSG e. V. bieten auch wieder unter Auflagen Kurse an. Bei Interesse rufen Sie bitte vorher an.",
      href: "",
      cta: "",
    },
    {
      id: 6,
      info: "Das Trihotel ist noch nicht geöffnet. Wir bekommen kurzfristig eine Info",
      href: "",
      cta: "",
    },
    {
      id: 7,
      info: " Lauf- und Wanderveranstaltungen finden wieder statt. Melden Sie sich für eine Veranstaltung an und bekommen Sie 20 € zurück. Alle Veranstaltungen finden Sie im Reiter „Lauf- und Wanderveranstaltungen“",
      href: "",
      cta: "",
    },
  ];

  const verticalcard_data = [
    {
      id: 1,
      image: bewegung,
      title: "DRK-Bewegungskurse",
      text: "Halten Sie sich fit. Mit unseren DRK-Bewegungskursen an vielen Standorten können Sie auspowern. ",
      content: [
        {
          id: 1,
          title: "Tester",
          text: "Lorem ipsum dolor sit amet",
          href: "",
          cta: "",
        },
        {
          id: 2,
          title: "Tester2",
          text: "Lorem ipsum dolor sit amte sfdje s",
          href: "",
          cta: "",
        },
      ],
    },
    {
      id: 2,
      image: ernährung,
      title: "Gesunde Ernährung",
      text: "Neben der Bewegung ist die Ernährung ein wichtiger Baustein, um lange gesund zu bleiben. Ob Buchung eines Workshops, ein Rezept oder Wissensinput: Hier finden Sie es!",
      content: [
        {
          id: 1,
          title: "Rote Beete",
          text: "Sehr lecker",
          href: "/",
          cta: "Hier Klicken",
        },
        {
          id: 2,
          title: "Burger mal Vegan",
          text: "Sojaprotein der neue Hit",
          href: "",
          cta: "",
        },
      ],
    },
  ];

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
          <AccordionContainer data={data.data.news} pageTitle={"Bgm News"} />
        </Container>
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 16 }}>
          {data.data.horizontal_karten.map((data) => (
            <>
              <Grid item xs={4} sm={8} md={8}>
                <HorizontalCard data={data} />
              </Grid>
            </>
          ))}
        </Grid>
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, sm: 12, md: 15, lg: 24 }}
          sx={{ marginTop: 5 }}
        >
          {data.data.vertikal_karten.map((data) => (
            <Grid item xs={4} sm={6} md={5} lg={6}>
              <VerticalCard data={data} />
            </Grid>
          ))}
        </Grid>
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
