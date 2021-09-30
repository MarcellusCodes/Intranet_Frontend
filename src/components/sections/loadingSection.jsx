import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NavigationLayout from "../navigationLayout";
import Navbar from "../elements/nav/navbar";
import PrimaryTitle from "../elements/typography/primaryTitle";
import { Container } from "@mui/material";

const LoadingSection = ({ pageIcon, pageTitle }) => {
  return (
    <>
      <Navbar />
      <NavigationLayout pageIcon={pageIcon} pageTitle={pageTitle}>
        <Container
          maxWidth="sm"
          sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "white.main",
              textAlign: "center",
              p: 4,
              width: 250,
              height: 250,
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <PrimaryTitle>Lade Daten...</PrimaryTitle>
            <CircularProgress color="primary" sx={{ marginTop: 5 }} />
          </Box>
        </Container>
      </NavigationLayout>
    </>
  );
};

export default LoadingSection;
