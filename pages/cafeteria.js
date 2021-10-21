import React, { useState } from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import TwoDimensionalGrid from "../src/components/elements/layout/twoDimensionalGrid";
import HorizontalCard from "../src/components/elements/card/horizontalCard";
import InfoCard from "../src/components/elements/card/infoCard";
import PrimaryTitle from "../src/components/elements/typography/primaryTitle";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Cafeteria({ cafeteria_data }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { isLoading, data, error } = useQuery(
    "cafeteria_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/9?fields=*.*.*`).then((res) =>
        res.json()
      ),
    { initialData: cafeteria_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<RestaurantIcon fontSize="large" />}
          pageTitle={"CAFETERIA"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<RestaurantIcon fontSize="large" />}
          pageTitle={"CAFETERIA"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<RestaurantIcon fontSize="large" />}
        pageTitle={"CAFETERIA"}
      >
        <ThreeDimensionalGrid>
          {data.data.info_karten.map((data, index) => (
            <>
              {index === 2 ? (
                <Grid item xs={4} sm={10} md={16} lg={21}>
                  <InfoCard data={data} maxContentHeight={924} />
                </Grid>
              ) : (
                <Grid item xs={4} sm={10} md={8} lg={10.5}>
                  <InfoCard data={data} maxContentHeight={924} />
                </Grid>
              )}
            </>
          ))}
        </ThreeDimensionalGrid>
        <TwoDimensionalGrid sx={{ marginTop: 5 }}>
          {data.data.horizontal_karten.map((data) => (
            <>
              <Grid item xs={4} sm={8} md={8}>
                <HorizontalCard data={data} />
              </Grid>
            </>
          ))}
        </TwoDimensionalGrid>
        <TwoDimensionalGrid sx={{ marginTop: 5 }}>
          <Grid item xs={4} sm={8} md={16}>
            <Document
              file={
                "http://localhost:8055/assets/9e1f5af7-3caf-4e84-8ae3-f161621ca7bf"
              }
              onSourceError={(err) =>
                alert(
                  "Es ist ein Fehler Aufgetreten bei der Source vom PDF Dokument auf",
                  err
                )
              }
              onLoadError={(err) =>
                alert(
                  "Es ist ein Fehler Aufgetreten beim Laden des PDF Dokument",
                  err
                )
              }
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Grid>
          <Grid item xs={4} sm={8} md={16}>
            <Document
              file={
                "http://localhost:8055/assets/9e1f5af7-3caf-4e84-8ae3-f161621ca7bf"
              }
              onSourceError={(err) =>
                alert(
                  "Es ist ein Fehler Aufgetreten bei der Source vom PDF Dokument auf",
                  err
                )
              }
              onLoadError={(err) =>
                alert(
                  "Es ist ein Fehler Aufgetreten beim Laden des PDF Dokument",
                  err
                )
              }
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Grid>
        </TwoDimensionalGrid>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:8055/items/rubriken/9?fields=*.*.*`
  );
  const cafeteria_data = await res.json();

  return { props: { cafeteria_data } };
}
