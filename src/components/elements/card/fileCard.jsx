import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "../../../Link";
import Image from "next/image";
import SecondaryText from "../typography/secondaryText";
import Scrollbar from "../scrollbar";
import Content from "../../content";
import createMarkUp from "../../../utils/createMarkUp";
import Stack from "@mui/material/Stack";

const FileCard = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          paddingTop: 1,
          paddingLeft: 0.5,
          minHeight: 300,
          position: "relative",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Stack
            sx={{ width: "70%" }}
            direction="column"
            alignItems="flex-start"
            spacing={0.2}
          >
            <Box
              sx={{
                width: "82%",
                backgroundColor: "#ED1C24",
                height: "15px",
                clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
              }}
            ></Box>
            <Box
              sx={{
                width: "95%",
                backgroundColor: "#C82127",
                height: "15px",
                clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
              }}
            ></Box>
          </Stack>
          <Stack
            sx={{ width: "30%" }}
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <Box sx={{ width: "16px", height: "16px" }}>
              <Image
                src={`http://localhost:8055/assets/4c9d9f0e-b8db-4416-8947-9263e45db554.png`}
                alt={"File Typ"}
                layout="fixed"
                width={"16px"}
                height={"16px"}
              />
            </Box>
            <Stack direction="column" alignItems="flex-start" spacing={-0.5}>
              <Typography
                sx={{ fontSize: "10px", fontWeight: "bold" }}
                color="text.primary"
                component="paragraph"
              >
                Deutsches
              </Typography>
              <Typography
                sx={{ fontSize: "10px", fontWeight: "bold" }}
                color="text.primary"
                component="paragraph"
              >
                Rotes
              </Typography>
              <Typography
                sx={{ fontSize: "10px", fontWeight: "bold" }}
                color="text.primary"
                component="paragraph"
              >
                Kreuz
              </Typography>
              <Typography
                sx={{ fontSize: "6px", fontWeight: "bold" }}
                color="text.primary"
                component="paragraph"
              >
                Kreisverband Rostock
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <CardContent sx={{ height: "auto", textAlign: "center" }}>
          <Scrollbar maxHeight={150}>
            <SecondaryText>
              <Content content={createMarkUp(data.titel)} />
            </SecondaryText>
          </Scrollbar>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ position: "absolute", bottom: 1, right: 1 }}
        >
          <Box sx={{ width: "32px", height: "32px" }}>
            <Link href={data.dokument_link}>
              <Image
                src={`http://localhost:8055/assets/${data.dokument_typ.filename_disk}`}
                alt={"File Typ"}
                layout="responsive"
                width={"30px"}
                height={"30px"}
              />
            </Link>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default FileCard;
