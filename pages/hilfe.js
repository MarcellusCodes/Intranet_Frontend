import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../src/components/elements/card/infoCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Hilfe({ hilfe_data }) {
  const { isLoading, data, error } = useQuery(
    "hilfe_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/3?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: hilfe_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<HelpCenterOutlinedIcon fontSize="large" />}
          pageTitle={"HILFE"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<HelpCenterOutlinedIcon fontSize="large" />}
          pageTitle={"HILFE"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<HelpCenterOutlinedIcon fontSize="large" />}
        pageTitle={"HILFE"}
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
    `http://localhost:8055/items/rubriken/3?fields=*.*.*`
  );
  const hilfe_data = await res.json();

  return { props: { hilfe_data } };
}
