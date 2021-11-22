import * as React from "react";
import Navbar from "../../src/components/elements/nav/navbar";
import NavigationLayout from "../../src/components/navigationLayout";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ThreeDimensionalGrid from "../../src/components/elements/layout/threeDimensionalGrid";
import FourDimensionalGrid from "../../src/components/elements/layout/fourDimensionalGrid";
import InfoCard from "../../src/components/elements/card/infoCard";
import VerticalCard from "../../src/components/elements/card/verticalCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Pik({ pik_data }) {
  const { isLoading, data, error } = useQuery(
    "pik_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/7?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: pik_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<SupervisorAccountOutlinedIcon fontSize="large" />}
          pageTitle={"PIK - PRÄVENTION, INTERVENTION, KONFLIKTE"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<SupervisorAccountOutlinedIcon fontSize="large" />}
          pageTitle={"PIK - PRÄVENTION, INTERVENTION, KONFLIKTE"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<SupervisorAccountOutlinedIcon fontSize="large" />}
        pageTitle={"PIK - PRÄVENTION, INTERVENTION, KONFLIKTE"}
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
        <FourDimensionalGrid>
          {data.data.vertikal_karten.map((data) => (
            <Grid item xs={4} sm={6} md={5} lg={6}>
              <VerticalCard data={data} />
            </Grid>
          ))}
        </FourDimensionalGrid>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://192.168.100.60:8055/items/rubriken/7?fields=*.*.*`
  );
  const pik_data = await res.json();

  return { props: { pik_data } };
}
