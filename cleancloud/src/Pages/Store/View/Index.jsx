import {  Avatar, Box, Button, Divider, IconButton, Paper, Tab, Tabs, Typography } from "@mui/material";
import Logo from "../../../assets/Images/CleanCloud_Icon_White.svg";
import { Error, Logout, Menu, Message, Search } from "@mui/icons-material";
import { useState } from "react";
import NewOrder from "../NewOrder";
import Cleaning from "../Cleaning";
import Detail from "../Detail";
import { useNavigate } from "react-router-dom";

//styles
const styles = {
    tab: {
        color: 'text.otherPrimary',//color when inactive
        '&.Mui-selected':{
            color: 'text.otherSecondary'//color when selected
        },
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '16px'
    },
    icon: {
        color: 'text.otherPrimary'
    }
}

const Store = () => {
    const navigate = useNavigate();
    //To check if user is logged in
    const isLoggedIn = !!localStorage.getItem('authToken');
    const email = localStorage.getItem('email');
    //To get the first letter of the email
    const firstLetter = email ? email.charAt(0).toUpperCase() : '';

    //To handle profile drop down menu
        const [profileMenu, setProfileMenu] = useState(false);
        const handleProfileMenu = () => {
            setProfileMenu(!profileMenu);
        };


    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (e, newTab) => {
        setActiveTab(newTab);
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Box sx={{ display:'flex'}}>
                <Box bgcolor={'background.button'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={2} ml={0} width={'60px'}>
                    <img src={Logo} alt="CleanCloud Logo" style={{ height: "20px"}} />
                </Box>
                <Box display={'flex'}  alignItems={'center'} justifyContent={'center'} p={2} ml={0} width={'60px'}>
                    <IconButton>
                        <Menu />
                    </IconButton>
                </Box>
                {/* Tabs for the store sections*/}
                <Box display={'flex'} flexGrow={1} alignItems={'center'} justifyContent={'center'} >
                    <Tabs value={activeTab} onChange={handleTabChange} sx={{ '& .MuiTabs-indicator': {display: 'none'}}}>
                        <Tab label="New Order" sx={styles.tab}/>
                        <Tab label="Detail" sx={styles.tab}/>
                        <Tab label="Cleaning" sx={styles.tab}/>
                        <Tab label="Ready" sx={styles.tab}/>
                        <Tab label="Pickups" sx={styles.tab}/>
                    </Tabs>
                </Box>
                <Box display={'flex'} gap={2} mr={2} flexDirection={'row'} alignItems={'center'}>
                    <Search  sx={styles.icon}/>
                    <Message sx={styles.icon}/>
                    <Box component={Button} sx={{textTransform: 'none', color: 'text.otherPrimary'}}>
                        <Typography sx={{color: 'text.otherPrimary'}}>Help</Typography>
                        <Error />
                    </Box >
                    {isLoggedIn && (
                        <div style={{position: 'relative', width: '150px' }} onMouseEnter={handleProfileMenu} onMouseLeave={handleProfileMenu}>
                        <Box  >
                            <Avatar sx={{bgcolor: 'background.button', cursor: 'pointer'}} >{firstLetter} </Avatar>
                        </Box>
                        {profileMenu && (
                                <Paper elevation={5} sx={{position: 'absolute', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
                                    <Button>Profile Management</Button>
                                    <Divider />
                                    <Button startIcon={<Logout />} onClick={()=> {localStorage.clear(); navigate('/log-in'); } } >Log out</Button>
                                </Paper>
                            )}
                        </div>
                    )}
                    <Button sx={{color: 'text.secondary', bgcolor: 'background.button', fontWeight: 'bold'}}>Join Now</Button>
                </Box>
            </Box>
            <Box sx ={{flexGrow: 1}}>
                {/* Render the content based on the active tab */}
                {activeTab === 0 && <NewOrder />}
                {activeTab === 1 && <Detail />}
                {activeTab === 2 && <Cleaning />}
                {activeTab === 3 && <Typography>Ready Section</Typography>}
                {activeTab === 4 && <Typography>Pickups Section</Typography>}
            </Box>


        </Box>
    );
}

export default Store;