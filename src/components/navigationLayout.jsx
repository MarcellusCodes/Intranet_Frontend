import Breadcrumbs from "nextjs-breadcrumbs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SectionTitle from "../components/elements/typography/sectionTitle";
import { useSelector } from "react-redux";
import { selectTitle, selectContent } from "../features/ui/modalSlice";
import ModalMain from "../components/elements/modal/modalMain";
import ModalSection from "../components/elements/modal/modalSection";
import Content from "./content";
import createMarkUp from "../utils/createMarkUp";
import Head from "next/head";

const NavigationLayout = ({ children, pageIcon, pageTitle }) => {
  const title = useSelector(selectTitle);
  const content = useSelector(selectContent);

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBottom: 8 }}>
        <Head>
          <title>Intranet {pageTitle}</title>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <SectionTitle>
          {pageIcon}
          {pageTitle}
        </SectionTitle>
        <Box
          sx={{
            width: "100%",
            p: 0,
            background: "#FFFFFF",
            boxShadow: 1,
            borderRadius: 1,
          }}
        >
          <Breadcrumbs
            useDefaultStyle
            rootLabel="Home"
            transformLabel={(title) =>
              title.charAt(0).toUpperCase() + title.slice(1)
            }
          />
        </Box>
        <ModalMain
          title={title}
          content={<Content content={createMarkUp(content)} />}
        />
        {children}
      </Container>
    </>
  );
};

export default NavigationLayout;
