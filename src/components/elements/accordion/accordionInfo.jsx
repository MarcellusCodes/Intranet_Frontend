import Link from "../../../Link";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import PrimaryText from "../typography/primaryText";
import Stack from "@mui/material/Stack";

const AccordionInfo = ({ data }) => {
  console.log(data);
  return (
    <>
      <AccordionDetails>
        {data.map((data) => (
          <>
            <Stack direction="row" alignItems="center" spacing={1}>
              <InfoIcon sx={{ color: "#E84A5F" }} />
              <Typography variant="h6">{data.titel}</Typography>
            </Stack>
            <PrimaryText>
              {data.info}
              {data.cta === "" ? (
                ""
              ) : (
                <Link href={data.href}>
                  <Button>{data.cta}</Button>
                </Link>
              )}
            </PrimaryText>

            <Divider sx={{ marginBottom: 2 }} />
          </>
        ))}
      </AccordionDetails>
    </>
  );
};

export default AccordionInfo;
