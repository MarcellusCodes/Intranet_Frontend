import * as React from "react";
import Navbar from "../../src/components/elements/nav/navbar";
import NavigationLayout from "../../src/components/navigationLayout";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

export default function ARZ() {
  return (
    <>
      <Navbar />
      <NavigationLayout
        pageIcon={<LocalHospitalOutlinedIcon fontSize="large" />}
        pageTitle={"DRK ROSTOCK - KV"}
      ></NavigationLayout>
    </>
  );
}
