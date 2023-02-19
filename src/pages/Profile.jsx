import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
    const height = window.screen.height+`px`;
    const {user} = UserAuth();
    if (user == null) {
        return <Navigate to="/" />;
    }
  return (
    <>
    <Navbar />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left'}} style={{backgroundColor: `#181414`, height: height, marginTop: `1px`, color: `white`}}>
        <div style={{marginLeft: `2%`}}>
            <Avatar
            sx={{ width: 150, height: 150, my: 4 }}
            alt={user?.displayName}
            src={user?.photoURL}
        />
        <Typography variant="h4" sx={{ mb: 2 }}>
            {user?.displayName}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
            <h3>Account Information:</h3> <br />
            <p style={{fontSize: `20px`}}>
                Name: {user?.displayName} <br />
                Email: {user?.email} <br />
                UID: {user?.uid} <br />
            </p>
        </Typography>
        <Grid container spacing={2} justifyContent="left">
            <Grid item>
            <Button variant="contained">Settings</Button>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
        </div>
    </Box>
    </>
  );
};

export default ProfilePage;
