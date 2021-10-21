import { Box } from "@mui/system";
import PrimaryText from "../typography/primaryText";

const InfoBox = ({ icon, info, marginTop }) => {
  return (
    <>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          p: 1,
          width: "100%",
          backgroundColor: "#FFFFFF",
          marginTop: marginTop,
        }}
      >
        {icon}
        <PrimaryText>{info}</PrimaryText>
      </Box>
    </>
  );
};

export default InfoBox;
