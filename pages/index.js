import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import ActionSection from "../src/components/sections/actionSection";
import InfoCard from "../src/components/elements/card/infoCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Index({ news_data }) {
  const { isLoading, data, error } = useQuery(
    "news_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/2?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: news_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<NewReleasesIcon fontSize="large" />}
          pageTitle={"NEWS"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<NewReleasesIcon fontSize="large" />}
          pageTitle={"NEWS"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<NewReleasesIcon fontSize="large" />}
        pageTitle={"NEWS"}
      >
        <ThreeDimensionalGrid>
          {data.data.info_karten.map((data) => (
            <>
              <Grid item xs={4} sm={10} md={8} lg={7}>
                <InfoCard data={data} maxContentHeight={250} />
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
    `http://192.168.100.60:8055/items/rubriken/2?fields=*.*.*`
  );
  const news_data = await res.json();

  return { props: { news_data } };
}
