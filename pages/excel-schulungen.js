import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FiveDimensionalGrid from "../src/components/elements/layout/fiveDimensionalGrid";
import FileCard from "../src/components/elements/card/fileCard";

import ActionSection from "../src/components/sections/actionSection";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function ExcelSchulungen({ excel_schulung_data }) {
  const { isLoading, data, error } = useQuery(
    "excel_schulung_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/10?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: excel_schulung_data }
  );
  console.log(data);
  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<LocalPhoneOutlinedIcon fontSize="large" />}
          pageTitle={"EXCEL SCHULUNGEN"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<LocalPhoneOutlinedIcon fontSize="large" />}
          pageTitle={"EXCEL SCHULUNGEN"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<LocalPhoneOutlinedIcon fontSize="large" />}
        pageTitle={"EXCEL SCHULUNGEN"}
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
    `http://192.168.100.60:8055/items/rubriken/10?fields=*.*.*`
  );
  const excel_schulungen_data = await res.json();

  return { props: { excel_schulungen_data } };
}
