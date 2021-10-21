import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FiveDimensionalGrid from "../src/components/elements/layout/fiveDimensionalGrid";
import FileCard from "../src/components/elements/card/fileCard";
import ActionSection from "../src/components/sections/actionSection";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function ExcelSchulungen({ formulare_data }) {
  const { isLoading, data, error } = useQuery(
    "formulare_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/11?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: formulare_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<DescriptionOutlinedIcon fontSize="large" />}
          pageTitle={"FORMULARE"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<DescriptionOutlinedIcon fontSize="large" />}
          pageTitle={"FORMULARE"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<DescriptionOutlinedIcon fontSize="large" />}
        pageTitle={"FORMULARE"}
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
    `http://localhost:8055/items/rubriken/11?fields=*.*.*`
  );
  const formulare_data = await res.json();

  return { props: { formulare_data } };
}
