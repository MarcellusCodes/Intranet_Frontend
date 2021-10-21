import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../src/components/elements/card/infoCard";
import ActionSection from "../src/components/sections/actionSection";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Betriebsanweisung({ betriebsanweisung_data }) {
  const { isLoading, data, error } = useQuery(
    "betriebsanweisung_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/15?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: betriebsanweisung_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<LibraryBooksIcon fontSize="large" />}
          pageTitle={"BETRIEBSANWEISUNG"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<LibraryBooksIcon fontSize="large" />}
          pageTitle={"BETRIEBSANWEISUNG"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<LibraryBooksIcon fontSize="large" />}
        pageTitle={"BETRIEBSANWEISUNG"}
      >
        <ThreeDimensionalGrid>
          {data.data.info_karten.map((data) => (
            <>
              <Grid item xs={4} sm={10} md={8} lg={10.5}>
                <InfoCard data={data} maxContentHeight={300} />
              </Grid>
            </>
          ))}
        </ThreeDimensionalGrid>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:8055/items/rubriken/15?fields=*.*.*`
  );
  const betriebsanweisung_data = await res.json();

  return { props: { betriebsanweisung_data } };
}
