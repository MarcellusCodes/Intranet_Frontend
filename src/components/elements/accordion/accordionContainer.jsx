import Accordion from "@mui/material/Accordion";
import AccordionTitle from "./accordionTitle";
import AccordionInfo from "./accordionInfo";

const AccordionContainer = ({ accordion_details }) => {
  return (
    <>
      <Accordion>
        <AccordionTitle title={accordion_details.title} />
        <AccordionInfo details={accordion_details.details} />
      </Accordion>
    </>
  );
};

export default AccordionContainer;
