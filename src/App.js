import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProfilePage from "./pages/Profile";


function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
