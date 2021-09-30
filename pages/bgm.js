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

export default function Bgm() {
  const accordion_data = [
    {
      id: 1,
      title: "Corona Richtlinien",
      details: [
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
      ],
    },
  ];
  const horizontalcard_data = [
    {
      id: 1,
      image: rad,
      title: "Mit dem Rad unterwegs",
      text: "Drei Monate sind um und es wurden genug Kilometer und Tage gesammelt. Wir losen diesen Monat noch die Gewinner:innen der 5 Gutscheine aus und veröffentlichen hier die glücklichen Radler:innen: - Gewinner:innen folgen -",
      href: "/",
      cta: "Mehr Erfahren",
    },
    {
      id: 2,
      image: kajak,
      title: "SUP",
      text: "Das SUPen und Kajak fahren auf der Warnow, umringt von der schönen Natur und den zahlreichen Tieren, neigt sich dem Ende. Sie haben aber weiterhin Interesse zu SUPen und überlegen sich sogar selbst ein Board anzuschaffen? Oder Sie waren aus Zeitgründen gar nicht erst im Kurs und möchten trotzdem die Grundtechniken lernen?",
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
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<CorporateFareOutlinedIcon fontSize="large" />}
        pageTitle={"BETRIEBLICHES GESUNDHEITSMANAGEMENT"}
      >
        <Container maxWidth="lg">
          <Carousel />
        </Container>
        <SectionTitle
          sx={{ marginTop: 10, marginBottom: 5, textAlign: "center" }}
        >
          Aktuelle BGM-Aktionen
        </SectionTitle>
        <Container maxWidth="md" sx={{ marginBottom: 10 }}>
          {accordion_data.map((data) => (
            <AccordionContainer accordion_details={data} />
          ))}
        </Container>
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 16 }}>
          {horizontalcard_data.map((extracted_data) => (
            <>
              <Grid item xs={4} sm={8} md={8}>
                <HorizontalCard data={extracted_data} />
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
          {verticalcard_data.map((extracted_data) => (
            <Grid item xs={4} sm={6} md={5} lg={6}>
              <VerticalCard data={extracted_data} />
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
          <PrimaryText>
            Haben Sie Fragen oder Anregungen? <br /> Dann nehmen Sie gerne
            Kontakt zu unserem Betrieblichen Gesundheitsmanagement auf:
          </PrimaryText>
          <br />
          <br />
          <PrimaryText>
            <strong>
              Catrin Gärtner und Kathrin Holm <br /> Betriebliches
              Gesundheitsmanagement <br /> Tel: 0381 24279 120 <br />
              <Link href="mailto:k.holm@drk-rostock.de">Kathrin Holm</Link>
            </strong>
          </PrimaryText>
        </Box>
      </NavigationLayout>
    </>
  );
}
