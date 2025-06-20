import { Box, Button, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material"
import TabletImg from "../../../assets/Images/hero_graphic_tablet.webp"
import { PlayCircle, Star } from "@mui/icons-material"
import { useState } from "react"


const Styles ={
    buttons: {
       textTransform: "none", 
       display: "inline-block", 
       p:1, 
       backgroundColor: "blue", 
       color: "white", 
       borderRadius:"20px",                          
       paddingLeft: "30px", 
       paddingRight: "30px", 
       cursor: "pointer" 
    }, 
    tabs: {
        minHeight: 50,
        textTransform: "none", 
        color: "text.primary",
        "&:hover":{
            color: "#29b6f6"
        },
        
    }
}

const Home = () =>{
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    //Setting the active business tab and handling tab change
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (e, newTab) => {
        setActiveTab(newTab);
    }
    return(
        <Box sx={{display:"flex", flexDirection: "column", gap:"20px"}}>
        <Box sx={{display:"flex", padding: 20, alignItems: "center", flexDirection: isTablet ? "column": "row", gap:"20px"}}>
            <Box sx={{width:isTablet ? "100%": "40%"}}>
                <Typography variant="h2"><span style={{color: "#29b6f6"}}>Point of Sale</span> for Laundromats & Dry Cleaners</Typography><br /><br />
                <hr style={{width: "50px", color: "grey", float: "left"}} /><br />
                <Typography variant="h5" color="text.secondary">The All-in-one solution for Point of Sale, Pickup and Delivery Apps and more.</Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button sx={Styles.buttons}>
                    Try for free
                    </Button>
                    <Button sx={{textTransform: "none", p:1, borderRadius:"15px", textDecoration: "none", color: "text.primary",
                                "&:hover":{color: "#29b6f6"}}}>
                                <Typography variant="h5" >Get in touch</Typography>  <PlayCircle sx={{color:"black" ,"&:hover":{color: "black"}}} />
                    </Button>
                    
                </Stack><br />
                
                <Typography>14-day free trial. No credit card required.<br />
                 <Star fontSize="small" sx={{color: "yellow"}}/><Star fontSize="small" sx={{color: "yellow"}}/>
                 <Star fontSize="small" sx={{color: "yellow"}}/><Star fontSize="small" sx={{color: "yellow"}}/>
                 <Star fontSize="small" sx={{color: "yellow"}}/> Capterra & GetApp<br />
                 The No. 1 reviewed software 10 years in a row</Typography>
                 

            </Box>
            <Box sx={{width:isTablet ? "100%":"60%"}}>
            <img src={TabletImg} alt="Graphic Tablet" style={{ width:"100%" }} />
            </Box>
        </Box>
        <Box sx={{backgroundColor: "background.paper", p: 4, width:"100%", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="h5" alignItems={"center"} justifySelf={"center"} fontWeight={"bold"}>SELECT YOUR BUSINESS TYPE</Typography>
        </Box>
        <Box >
            <Tabs value={activeTab}  onChange={handleTabChange} aria-label="Business Tabs" sx={{justifySelf: "center"}}>
                <Tab label= "Dry Cleaning" sx={Styles.tabs}/>
                <Tab label= "Laundromart" sx={Styles.tabs} />
                <Tab label= "Alterations" sx={Styles.tabs}/>
                <Tab label = "Shoe Cleaning" sx={Styles.tabs}/>
            </Tabs>
        </Box>




        </Box>
    )
}

export default Home;