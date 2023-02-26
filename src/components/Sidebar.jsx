import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React, { useEffect } from "react";
import { auth } from '../Firebase';
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';


const Sidebar = ({mode,setMode}) => {
  // Permanent Dark Mode//

  if (mode === "light") {
    setMode("dark");
  }
  // END: Permanent Dark Mode //

  const navigate = useNavigate();
  const toProfile = () => navigate("/profile");

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={toProfile}>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          {/*
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "dark" ? "light" : "dark")}/>
            </ListItemButton>
          </ListItem>
          */}
        </List>
      </Box>
    </Box>

  );
};

export default Sidebar;
