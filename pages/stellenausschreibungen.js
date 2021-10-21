import * as React from "react";
import Navbar from "../src/components/elements/nav/navbar";
import NavigationLayout from "../src/components/navigationLayout";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Head from "next/head";

export default function Stellenausschreibungen() {
  return (
    <>
      <Head>
        <script src="https://static.dvinci-easy.com/files/job-widget-v1/dvinci-job-widget-full-1.0.0.min.js"></script>
      </Head>
      <Navbar />
      <NavigationLayout
        pageIcon={<CreateOutlinedIcon fontSize="large" />}
        pageTitle={"STELLENAUSSCHREIBUNGEN"}
      >
        <div
          class="dvinci-job-widget"
          data-url=" https://drk-rostock.dvinci-hr.com/portal/intranet/jobPublication/list.json?fields=small"
          data-skin="drk_rostock"
          lang="de"
          data-list-jobs-per-page="30"
        ></div>
      </NavigationLayout>
    </>
  );
}
