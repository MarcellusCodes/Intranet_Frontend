import CircularProgress from "@mui/material/CircularProgress";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Box from "@mui/material/Box";
import NavigationLayout from "../navigationLayout";
import Navbar from "../elements/nav/navbar";
import PrimaryTitle from "../elements/typography/primaryTitle";
import { Container } from "@mui/material";

const ActionSection = ({ pageIcon, pageTitle, action }) => {
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
            {action === "loading" ? (
              <>
                <PrimaryTitle>Lade Daten...</PrimaryTitle>
                <CircularProgress color="primary" sx={{ marginTop: 5 }} />
              </>
            ) : (
              <>
                <PrimaryTitle>Problem beim Laden der Daten...</PrimaryTitle>
                <ErrorOutlineOutlinedIcon
                  color="error"
                  sx={{ marginTop: 5 }}
                  sx={{ fontSize: 50 }}
                />
              </>
            )}
          </Box>
        </Container>
      </NavigationLayout>
    </>
  );
};

export default ActionSection;
