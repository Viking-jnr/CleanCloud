import { Box, Button, Grid, List, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/system";
import { useState } from "react"
import hero_image from "../../../assets/Images/hero_image.png"
import { PlayCircle } from "@mui/icons-material";

//Styles
const Styles ={
    buttons: {
       textTransform: "none", 
       display: "inline-block", 
       p:1, 
       backgroundColor: "blue", 
       color: "text.secondary", 
       borderRadius:"30px",                          
       paddingLeft: "30px", 
       paddingRight: "30px", 
       cursor: "pointer" 
    }, 
}

const Features = () =>{
    const featuresList = [
        {id :"pos", title: "Point of Sale"},
        {id: "pickup", title: "Pickup and Delivery"},
        {id: "laundry", title: "Laundromat"},
        {id: "assembly", title: "Assembly"},
        {id: "lockers", title: "Lockers"},
        {id: "multi-store", title: "Multi-Store and Plant"},
        {id: "hostedWebsite", title: "Hosted Website"},
        {id: "hardware", title: "Hardware"},
        {id: "payments", title: "Payments"},
        {id: "reporting", title: "Reporing"},
        {id: "marketing", title: "Marketing"},
        {id: "security", title: "Security"},
    ]

const [selectedFeature, setSelectedFeature] = useState("pos");
const theme = useTheme();
const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

return(
    <Box sx={{display:"flex", flexDirection: "column", gap:"50px"}}>
    <Box sx={{display:"flex", padding: 20, alignItems: "center", flexDirection: isTablet ? "column": "row", gap:"20px",
                        backgroundColor: "background.footer"}}>
                    <Box sx={{width:isTablet ? "100%": "50%", display: "flex", flexDirection: "column", gap: "10px"}}>
                            <Typography sx={{color:"text.otherPrimary", top: 0}}>
                                FEATURES OVERVIEW
                            </Typography>
                            <Typography variant="h2" sx={{color: "text.primary"}}>
                                Features to grow<br/>your business.
                            </Typography><br /><br />
                            <Typography variant="h5" color="text.otherPrimary">
                                All you need to run a successful dry<br/>cleaner or laundry service from 1-1000 stores.
                            </Typography>
                            <Stack direction={"row"} spacing={2}>
                                <Button sx={Styles.buttons}>
                                Try for free
                                </Button>
                                <Button sx={{textTransform: "none", p:1, borderRadius:"15px", textDecoration: "none", color: "text.primary",
                                            "&:hover":{color: "#29b6f6"}}}>
                                            <Typography variant="h5" >Get in touch</Typography> 
                                            <PlayCircle fontSize="large" sx={{color:"black" ,"&:hover":{color: "black"}}} />
                                </Button>
                                
                            </Stack><br />
                        </Box>
                        <Box sx={{width:isTablet ? "100%":"50%"}}>
                            <img src={hero_image} alt="Multi Stores" style={{ height: isTablet ? "600px": "auto",width: isTablet ? "auto": "100%" }} />
                        </Box>
                </Box>
    <Grid container>
        <Grid item xs={12} md={3}>
            <List>
                {featuresList.map((feature)=> (
                    <ListItemButton
                    key={feature.id}
                    selected={selectedFeature === feature.id}
                    onClick={()=> setSelectedFeature(feature.id)}>
                        <ListItemText primary={feature.title} />
                    </ListItemButton>
                ))}
            </List>
        </Grid>
    </Grid>
    </Box>
);

}

export default Features;
