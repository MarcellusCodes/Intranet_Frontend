import Link from "../../../Link";
import { Button } from "@mui/material";

const CtaButton = ({ cta, href, variant }) => {
  return (
    <>
      {cta === "" ? (
        ""
      ) : (
        <Link href={href}>
          <Button variant={variant} sx={{ marginTop: 2 }}>
            {cta}
          </Button>
        </Link>
      )}
    </>
  );
};

export default CtaButton;
