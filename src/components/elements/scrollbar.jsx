import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const ScrollBar = ({ children, maxHeight }) => {
  return (
    <>
      <SimpleBar style={{ maxHeight: maxHeight }}>{children}</SimpleBar>
    </>
  );
};

export default ScrollBar;
