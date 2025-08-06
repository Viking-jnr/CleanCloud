import {  Box, Button, IconButton, Tab, Tabs, Typography } from "@mui/material";
import Logo from "../../../assets/Images/CleanCloud_Icon_White.svg";
import { Error, Menu, Message, Search } from "@mui/icons-material";
import { useState } from "react";
import NewOrder from "../NewOrder";
import Cleaning from "../Cleaning";
import Detail from "../Detail";

//styles
const styles = {
    tab: {
        color: 'text.otherPrimary',
        '&.Mui-selected':{
            color: 'text.otherSecondary'
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
    //To check if user is logged in
    const isLoggedIn = !!localStorage.getItem('authToken');
    const email = localStorage.getItem('email');
    //To get the first letter of the email
    const firstLetter = email ? email.charAt(0).toUpperCase() : '';


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
                        <Box component={Button} sx={{bgcolor: 'background.button', borderRadius: '50%', width: '15px', height: '40px'}}>
                            <Typography >{firstLetter} </Typography>
                        </Box>
                    )}
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