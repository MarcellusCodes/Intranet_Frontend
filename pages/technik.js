import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Container, Accordion } from "@mui/material";
import AccordionInfo from "../src/components/elements/accordion/accordionInfo";
import AccordionTitle from "../src/components/elements/accordion/accordionTitle";
import { useQuery } from "react-query";

export default function Telefonlisten({ technik_data }) {
  const { isLoading, data, error } = useQuery(
    "technik_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/12?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: technik_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<EngineeringIcon fontSize="large" />}
          pageTitle={"TECHNIK"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<EngineeringIcon fontSize="large" />}
          pageTitle={"TECHNIK"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<EngineeringIcon fontSize="large" />}
        pageTitle={"TECHNIK"}
      >
        <Container maxWidth="md" sx={{ marginBottom: 10 }}>
          {data.data.news.map((data) => (
            <Accordion>
              <AccordionTitle data={data} />
              <AccordionInfo data={data} />
            </Accordion>
          ))}
        </Container>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:8055/items/rubriken/12?fields=*.*.*`
  );
  const technik_data = await res.json();

  return { props: { technik_data } };
}
