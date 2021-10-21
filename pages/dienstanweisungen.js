import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import WorkIcon from "@mui/icons-material/Work";
import FiveDimensionalGrid from "../src/components/elements/layout/fiveDimensionalGrid";
import FileCard from "../src/components/elements/card/fileCard";
import ActionSection from "../src/components/sections/actionSection";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function DienstAnweisungen({ dienstanweisungen_data }) {
  const { isLoading, data, error } = useQuery(
    "dienstanweisungen_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/13?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: dienstanweisungen_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<WorkIcon fontSize="large" />}
          pageTitle={"DIENSTANWEISUNGEN"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<WorkIcon fontSize="large" />}
          pageTitle={"DIENSTANWEISUNGEN"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<WorkIcon fontSize="large" />}
        pageTitle={"DIENSTANWEISUNGEN"}
      >
        <FiveDimensionalGrid>
          {data.data.formulare.map((data) => (
            <>
              <Grid item xs={5} sm={5} md={5} lg={6}>
                <FileCard data={data} />
              </Grid>
            </>
          ))}
        </FiveDimensionalGrid>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:8055/items/rubriken/13?fields=*.*.*`
  );
  const dienstanweisungen_data = await res.json();

  return { props: { dienstanweisungen_data } };
}
