import Breadcrumbs from "nextjs-breadcrumbs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SectionTitle from "../components/elements/typography/sectionTitle";
import { useSelector } from "react-redux";
import { selectTitle, selectContent } from "../features/ui/modalSlice";
import ModalMain from "../components/elements/modal/modalMain";
import ModalSection from "../components/elements/modal/modalSection";

const NavigationLayout = ({ children, pageIcon, pageTitle }) => {
  const title = useSelector(selectTitle);
  const content = useSelector(selectContent);

  return (
    <>
      <Container maxWidth="xl">
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
          }}
        >
          <Breadcrumbs useDefaultStyle rootLabel="Home" />
        </Box>
        <ModalMain
          title={title}
          content={content.map((extracted) => (
            <ModalSection
              title={extracted.title}
              text={extracted.text}
              cta={extracted.cta}
              href={extracted.cta}
            />
          ))}
        />
        {children}
      </Container>
    </>
  );
};

export default NavigationLayout;
