import Accordion from "@mui/material/Accordion";
import AccordionTitle from "./accordionTitle";
import AccordionInfo from "./accordionInfo";

const AccordionContainer = ({ data, pageTitle }) => {
  return (
    <>
      <Accordion>
        <AccordionTitle title={pageTitle} />
        <AccordionInfo data={data} />
      </Accordion>
    </>
  );
};

export default AccordionContainer;
