import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import { UserAuth } from '../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

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
            
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.dark',
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <PersonIcon style={{ color:"#36454f"}} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user?.displayName} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <EmailIcon style={{ color:"#36454f"}}/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user?.email}/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BadgeIcon style={{ color:"#36454f"}}/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user?.uid}/>
                </ListItem>
            </List>
        </Typography>
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                <Button variant="contained" {...bindTrigger(popupState)} style={{width:"240px"}}>
                    Terms of Service
                </Button>
                <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography sx={{ p: 2 }}>
                        <h4>Alistra TOS</h4>
                        <br/>
                        <p style={{fontSize:"17px"}}>
                        By using our service, you agree to these terms and conditions. <br/>
                        Our service is provided "as is," and we make no warranties or guarantees.<br/>
                        You are solely responsible for any content you post or upload to our service.<br/>
                        We reserve the right to remove any content that violates our policies or is otherwise inappropriate.<br/>
                        You may not use our service for any illegal or unauthorized purpose.<br/>
                        We may suspend or terminate your account at any time for any reason.<br/>
                        We reserve the right to modify these terms of service at any time without notice.<br/>
                        We do not guarantee the accuracy or completeness of any information provided on our service.<br/>
                        Our service may contain links to third-party websites, which are not under our control.<br/>
                        We are not responsible for any damages or losses resulting from your use of our service.<br/>
                        You agree to indemnify and hold us harmless from any claims, damages, or losses arising from your use of our service.<br/>
                        These terms of service are governed by the laws of the jurisdiction in which we operate.<br/>
                        Any disputes arising from these terms of service will be resolved through arbitration.<br/>
                        Our service is intended for users who are at least 18 years old.<br/>
                        If you have any questions or concerns about these terms of service, please contact us.<br/>
                        </p>
                    </Typography>
                </Popover>
                </div>
            )}
        </PopupState> <br/>
        <Grid container spacing={2} justifyContent="left">
            <Grid item>
            <Button style={{width:`15px`, height:`30px`, backgroundColor:`#4c49494b`}} href="/">  <ArrowBackIcon /> </Button>
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
