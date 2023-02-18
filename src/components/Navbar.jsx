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
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from "react";
import Logo from "../img/Logo.png";
import "../imgSize.css";
import { UserAuth } from "../context/AuthContext";

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

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <img className="imgSize" src={Logo} alt="Logo" />
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
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
  );
};

export default Navbar;
