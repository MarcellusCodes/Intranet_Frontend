import * as React from "react";
import Navbar from "../../src/components/elements/nav/navbar";
import NavigationLayout from "../../src/components/navigationLayout";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import ThreeDimensionalGrid from "../../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../../src/components/elements/card/infoCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Fahrplaene({ fahrplaene_data }) {
  const { isLoading, data, error } = useQuery(
    "fahrplaene_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/4?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: fahrplaene_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<TrainOutlinedIcon fontSize="large" />}
          pageTitle={"FAHRPLÄNE"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<TrainOutlinedIcon fontSize="large" />}
          pageTitle={"FAHRPLÄNE"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<TrainOutlinedIcon fontSize="large" />}
        pageTitle={"FAHRPLÄNE"}
      >
        <ThreeDimensionalGrid>
          {data.data.info_karten.map((data) => (
            <>
              <Grid item xs={4} sm={10} md={8} lg={21}>
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
    `http://192.168.100.60:8055/items/rubriken/4?fields=*.*.*`
  );
  const fahrplaene_data = await res.json();

  return { props: { fahrplaene_data } };
}
