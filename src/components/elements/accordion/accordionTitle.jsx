import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";

const AccordionTitle = ({ data }) => {
  return (
    <>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5">{data.titel}</Typography>
        </Stack>
      </AccordionSummary>
    </>
  );
};

export default AccordionTitle;
