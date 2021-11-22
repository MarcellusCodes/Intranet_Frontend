import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../src/components/elements/card/infoCard";
import ActionSection from "../src/components/sections/actionSection";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Fernwartung({ fernwartung_data }) {
  const { isLoading, data, error } = useQuery(
    "fernwartung_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/16?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: fernwartung_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<DesktopWindowsIcon fontSize="large" />}
          pageTitle={"FERNWARTUNG"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<DesktopWindowsIcon fontSize="large" />}
          pageTitle={"FERNWARTUNG"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<DesktopWindowsIcon fontSize="large" />}
        pageTitle={"FERNWARTUNG"}
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
    `http://192.168.100.60:8055/items/rubriken/16?fields=*.*.*`
  );
  const fernwartung_data = await res.json();

  return { props: { fernwartung_data } };
}
