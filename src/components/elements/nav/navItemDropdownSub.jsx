import { useState } from "react";
import Link from "../../../Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const NavItemDropdownSub = ({ sublink }) => {
  const [subOpen, setSubOpen] = useState(false);

  const handleSubOpen = () => {
    setSubOpen(!subOpen);
  };
  return (
    <>
      <ListItemButton onClick={handleSubOpen}>
        <ListItemText primary={sublink.name} sx={{ color: "#fffffe" }} />
        {subOpen ? (
          <ExpandLess sx={{ color: "#fffffe" }} />
        ) : (
          <ExpandMore sx={{ color: "#fffffe" }} />
        )}
      </ListItemButton>
      {sublink.sub_href.map((sub) => (
        <Collapse in={subOpen} timeout="auto" unmountOnExit>
          <Link href={sub.href}>
            <ListItemButton sx={{ borderBottom: "1px solid #fffffe" }}>
              <ListItemText primary={sub.name} sx={{ color: "#fffffe" }} />
            </ListItemButton>
          </Link>
        </Collapse>
      ))}
    </>
  );
};

export default NavItemDropdownSub;
