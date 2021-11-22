import { useState } from "react";
import Link from "../../../Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import NavItemDropdownSub from "./navItemDropdownSub";

const navItemDropdown = ({ name, icon, sub_href }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton
        onClick={handleOpen}
        sx={{ borderBottom: "1px solid #fffffe" }}
      >
        <ListItemIcon sx={{ color: "#fffffe" }}>{icon}</ListItemIcon>
        <ListItemText primary={name} sx={{ color: "#fffffe" }} />
        {open ? (
          <ExpandLess sx={{ color: "#fffffe" }} />
        ) : (
          <ExpandMore sx={{ color: "#fffffe" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {sub_href.map((sublink) =>
            sublink.sub_href !== undefined && sublink.sub_href.length === 0 ? (
              <Link href={sublink.href}>
                <ListItemButton sx={{ borderBottom: "1px solid #fffffe" }}>
                  <ListItemText
                    primary={sublink.name}
                    sx={{ color: "#fffffe" }}
                  />
                </ListItemButton>
              </Link>
            ) : (
              <NavItemDropdownSub sublink={sublink} />
            )
          )}
        </List>
      </Collapse>
    </>
  );
};

export default navItemDropdown;
