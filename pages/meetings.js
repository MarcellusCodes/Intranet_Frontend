import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ThreeDimensionalGrid from "../src/components/elements/layout/threeDimensionalGrid";
import InfoCard from "../src/components/elements/card/infoCard";
import ActionSection from "../src/components/sections/actionSection";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

export default function Meetings({ meetings_data }) {
  const { isLoading, data, error } = useQuery(
    "meetings_data",
    () =>
      fetch(`http://localhost:8055/items/rubriken/17?fields=*.*.*`).then(
        (res) => res.json()
      ),
    { initialData: meetings_data }
  );

  if (isLoading)
    return (
      <>
        <ActionSection
          pageIcon={<MeetingRoomOutlinedIcon fontSize="large" />}
          pageTitle={"MEETINGS"}
          action="loading"
        />
      </>
    );

  if (error)
    return (
      <>
        <ActionSection
          pageIcon={<MeetingRoomOutlinedIcon fontSize="large" />}
          pageTitle={"MEETINGS"}
          action="error"
        />
      </>
    );
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<MeetingRoomOutlinedIcon fontSize="large" />}
        pageTitle={"MEETINGS"}
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
        <iframe
          style={{ width: "100%", height: "800px", marginTop: "5rem" }}
          src="http://localhost:8055/assets/19557d34-6df5-4f81-b55c-f11ccf1c769f"
          height="240"
          width="320"
          frameborder="0"
        ></iframe>
      </NavigationLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:8055/items/rubriken/17?fields=*.*.*`
  );
  const meetings_data = await res.json();

  return { props: { meetings_data } };
}
