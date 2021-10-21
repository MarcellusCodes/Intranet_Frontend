import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../src/components/elements/card/infoCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Telefonlisten({ telefonlisten_data }) {
  const { isLoading, data, error } = useQuery(
    "telefonlisten_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/5?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: telefonlisten_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<LocalPhoneOutlinedIcon fontSize="large" />}
          pageTitle={"TELEFONLISTEN"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<LocalPhoneOutlinedIcon fontSize="large" />}
          pageTitle={"TELEFONLISTEN"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<LocalPhoneOutlinedIcon fontSize="large" />}
        pageTitle={"TELEFONLISTEN"}
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
    `http://localhost:8055/items/rubriken/5?fields=*.*.*`
  );
  const telefonlisten_data = await res.json();

  return { props: { telefonlisten_data } };
}
