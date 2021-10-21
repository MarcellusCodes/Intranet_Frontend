import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import SecondaryText from "../typography/secondaryText";
import Scrollbar from "../scrollbar";
import Content from "../../content";
import createMarkUp from "../../../utils/createMarkUp";

const InfoCard = ({ data, maxContentHeight }) => {
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          title={data.titel}
          sx={{
            height: "20%",
            background: "#F7F7F7",
            color: "#212121",
            borderBottom: "1px solid rgba(0, 0, 0, .125)",
          }}
        />
        <CardContent sx={{ height: "auto", background: "#FFFFFF" }}>
          <Scrollbar maxHeight={maxContentHeight}>
            <SecondaryText>
              <Content content={createMarkUp(data.text)} />
            </SecondaryText>
          </Scrollbar>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoCard;
