import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@mui/styles";
import Link from "../../../Link";
import navigationItems from "../../../utils/navigationItems";
import NavItem from "./navItem";
import NavItemDropdown from "./navItemDropdown";

const useStyles = makeStyles({
  paper: {
    background: "#393E46",
  },
});

export default function Navbar() {
  const [navItems, setNavItems] = useState(navigationItems);
  const classes = useStyles();
  const [drawer, setDrawer] = useState({
    open: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ open: open });
  };
  console.log(navItems);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/">
              <Image
                src={"/app_logo.jpg"}
                alt="Logo DRK Rostock Intranet"
                width={60}
                height={30}
              />
            </Link>
            <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }} ml={2}>
              Intranet DRK Rostock
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
              <Typography variant="subtitle1" component="span">
                Menü
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Drawer
          anchor={"right"}
          open={drawer["open"]}
          onClose={toggleDrawer(false)}
          classes={{ paper: classes.paper }}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {navItems.map((item) =>
                item.sub_href.length === 0 ? (
                  <NavItem
                    name={item.name}
                    icon={item.icon}
                    href={item.href}
                    sub_href={item.sub_href}
                  />
                ) : (
                  <NavItemDropdown
                    name={item.name}
                    icon={item.icon}
                    sub_href={item.sub_href}
                  />
                )
              )}
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
}
