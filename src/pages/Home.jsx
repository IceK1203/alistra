import React from 'react'
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useState } from "react";
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


const Home = () => {
    const [mode, setMode] = useState("light");
  
    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

    const {user} = UserAuth();
    if (user == null) {
        return <Navigate to="/" />;
    }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default Home