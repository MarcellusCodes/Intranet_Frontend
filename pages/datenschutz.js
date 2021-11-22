import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../src/components/elements/card/infoCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Datenschutz({ datenschutz_data }) {
  const { isLoading, data, error } = useQuery(
    "datenschutz_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/6?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: datenschutz_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<VpnKeyIcon fontSize="large" />}
          pageTitle={"DATENSCHUTZ"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<VpnKeyIcon fontSize="large" />}
          pageTitle={"DATENSCHUTZ"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<VpnKeyIcon fontSize="large" />}
        pageTitle={"DATENSCHUTZ"}
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
    `http://192.168.100.60:8055/items/rubriken/6?fields=*.*.*`
  );
  const datenschutz_data = await res.json();

  return { props: { datenschutz_data } };
}
