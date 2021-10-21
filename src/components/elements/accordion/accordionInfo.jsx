import Link from "../../../Link";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import PrimaryText from "../typography/primaryText";
import Stack from "@mui/material/Stack";
import Content from "../../content";
import createMarkUp from "../../../utils/createMarkUp";

const AccordionInfo = ({ data }) => {
  return (
    <>
      <AccordionDetails>
        <>
          <PrimaryText>
            <Content content={createMarkUp(data.info)} />
            {data.href === null ? (
              ""
            ) : (
              <Link href={data.href}>
                <Button>{data.cta}</Button>
              </Link>
            )}
          </PrimaryText>
        </>
      </AccordionDetails>
    </>
  );
};

export default AccordionInfo;
