import Link from "../../../Link";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import PrimaryText from "../typography/primaryText";

const AccordionInfo = ({ details }) => {
  return (
    <>
      <AccordionDetails>
        {details.map((detail) => (
          <>
            <PrimaryText>
              <InfoIcon sx={{ color: "#E84A5F" }} /> {detail.info}
              {detail.cta === "" ? (
                ""
              ) : (
                <Link href={detail.href}>
                  <Button>{detail.cta}</Button>
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
