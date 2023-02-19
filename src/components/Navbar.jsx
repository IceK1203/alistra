import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  IconButton,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from "react";
import Logo from "../img/Logo.png";
import "../imgSize.css";
import { UserAuth } from "../context/AuthContext";
import MenuIcon from '@mui/icons-material/Menu';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#243763",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }
  console.log(window.screen.width);
  return (
    <>
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <img className="imgSize" src={Logo} alt="Logo" />
        </Typography>
          {window.screen.width < 800 ? <button onClick={(e) => setOpen(true)} style={{ width: `15px`, background: `transparent`}}> <MenuIcon style={{color:`white`,}} sx={{ display: { xs: "block", sm: "none" } }} /> </button> : null}
        <Search>
          <input className="input" placeholder="Search..." />
        </Search>
        <Icons>
          <button
           onClick={handleSignOut} 
           style={{
            fontSize: `16px`,
            borderRadius: `5px`,
            width: `68px`,
           }}
           >Logout</button>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user?.photoURL}
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">{user?.displayName}</Typography>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user?.photoURL}
          />
          <Typography variant="span">{user?.displayName}</Typography>
        </UserBox>
      </StyledToolbar>

    </AppBar>


    {/* RESPONSIVE NAVBAR AREA */}


      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="left" marginBottom="5px">
            Account:
          </Typography>
          <UserBox marginBottom="8px">
            <Avatar
              src={user?.photoURL}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {user?.displayName}
            </Typography>
          </UserBox>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/home">
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
            <ListItemButton component="a" href="/profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
      </SytledModal>

    </>
  );
};

export default Navbar;
