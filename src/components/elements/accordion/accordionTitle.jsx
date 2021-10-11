import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import Stack from "@mui/material/Stack";
const AccordionTitle = ({ title }) => {
  return (
    <>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <AnnouncementIcon sx={{ color: "#E84A5F" }} />
          <Typography variant="h5">{title}</Typography>
        </Stack>
      </AccordionSummary>
    </>
  );
};

export default AccordionTitle;
