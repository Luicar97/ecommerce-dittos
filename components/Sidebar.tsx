"use client";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SellIcon from '@mui/icons-material/Sell';
import UpdateIcon from '@mui/icons-material/Update';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { usePathname } from "next/navigation";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'; // Grid version 2

import logo from '../public/assets/img/logo.png';
import Stack from "@mui/material/Stack";

const Sidebar = () => {
  const pathname = usePathname();

  // const showSidebar = pathname.replace("/", "") === "docs";

  const showSidebar = true;

  return (
    <Box sx={{ display: showSidebar ? "none" : "flex" }}>
      <Drawer

        sx={{
          // width: 250,
          // maxWidth: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            // width: 250,
            // maxWidth: 250,
            boxSizing: "border-box",
            borderWidth: 0,
            marginLeft: '36px',
            paddingTop: '42px',
            paddingRight: '20px',
          },
          ".mui-16ac5r2-MuiButtonBase-root-MuiListItemButton-root:hover": {
            borderRadius: '12px',
          },
        }}

        variant="permanent"
        anchor="left"
      >
        <Toolbar disableGutters sx={{ paddingLeft: '8px' }}>
          <Stack direction="row" spacing={0}>
            <Box width='xs' sx={{ backgroundColor: '#1FAEC566', borderRadius: '10px', }}>
              <img
                src={logo.src}
                alt='logo'
                loading="lazy"
                width={40}
              />
            </Box>
            <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#1FAEC5' }}>Dittos.</Typography>
            </Container>
          </Stack>
        </Toolbar >

        <Container sx={{ height: 20 }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary={"Explore"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary={"Saved"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={"Cart"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary={"Selling"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UpdateIcon />
              </ListItemIcon>
              <ListItemText primary={"Purchase History"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact us"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary={"Setting"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box >
  );
};

export default Sidebar;
