import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import FiveDimensionalGrid from "../src/components/elements/layout/fiveDimensionalGrid";
import FileCard from "../src/components/elements/card/fileCard";
import InfoCard from "../src/components/elements/card/infoCard";
import Grid from "@mui/material/Grid";
import InfoBox from "../src/components/elements/box/infoBox";
import { useQuery } from "react-query";

export default function Corona({ corona_data }) {
  const { isLoading, data, error } = useQuery(
    "corona_data",
    () =>
      fetch(`http://192.168.100.60:8055/items/rubriken/8?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: corona_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<CoronavirusOutlinedIcon fontSize="large" />}
          pageTitle={"CORONA - INFORMATIONEN"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<CoronavirusOutlinedIcon fontSize="large" />}
          pageTitle={"CORONA - INFORMATIONEN"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<CoronavirusOutlinedIcon fontSize="large" />}
        pageTitle={"CORONA - INFORMATIONEN"}
      >
        <ThreeDimensionalGrid>
          {data.data.info_karten.map((data, index) => (
            <>
              {index === 0 ? (
                <Grid item xs={4} sm={10} md={16} lg={21}>
                  <InfoCard data={data} maxContentHeight={300} />
                </Grid>
              ) : (
                <Grid item xs={4} sm={10} md={8} lg={10.5}>
                  <InfoCard data={data} maxContentHeight={300} />
                </Grid>
              )}
            </>
          ))}
        </ThreeDimensionalGrid>
        <InfoBox
          icon={<DescriptionOutlinedIcon />}
          info={
            "Formulare / Vordrucke (Novel Coronavirus 2019-nCoV Antigen Test - Speichel)"
          }
          marginTop={6}
        />
        <FiveDimensionalGrid marginTop={-0.5}>
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
    `http://192.168.100.60:8055/items/rubriken/8?fields=*.*.*`
  );
  const corona_data = await res.json();

  return { props: { corona_data } };
}
