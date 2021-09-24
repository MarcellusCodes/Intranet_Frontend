import Link from "../../../Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NavItem = ({ name, href, icon }) => {
  return (
    <>
      <Link href={href}>
        <ListItemButton sx={{ borderBottom: "1px solid #fffffe" }}>
          <ListItemIcon sx={{ color: "#fffffe" }}>{icon}</ListItemIcon>
          <ListItemText
            primary={name}
            color="text.primary"
            sx={{ color: "#fffffe" }}
          />
        </ListItemButton>
      </Link>
    </>
  );
};

export default NavItem;
