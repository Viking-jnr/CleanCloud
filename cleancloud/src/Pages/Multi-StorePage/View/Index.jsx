import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ReadytoStart from "../../../Components/Ready"
import Support from "../../../Components/Support"
import hero_multi_store from "../../../assets/Images/hero_multi_store.png"
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

const MultiStore =()=> {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <Box sx={{display:"flex", flexDirection: "column", gap:"50px"}}>

            <Box sx={{display:"flex", padding: 20, alignItems: "center", flexDirection: isTablet ? "column": "row", gap:"20px",
                    backgroundColor: "background.footer"}}>
                <Box sx={{width:isTablet ? "100%": "50%", display: "flex", flexDirection: "column", gap: "10px"}}>
                        <Typography sx={{color:"text.otherPrimary", top: 0}}>
                            Multi-Store
                        </Typography>
                        <Typography variant="h2" sx={{color: "text.primary"}}>
                            Run All Your Stores, Plants, Staff and Services in <span style={{color: "#29b6f6"}}>One Place</span>
                        </Typography><br /><br />
                        <Typography variant="h5" color="text.otherPrimary">
                            Take advantage of CleanCloud's multi-store features to improve your productivity, increase profits with an intuitive 
                            solution that will scale with you.
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
                        <img src={hero_multi_store} alt="Multi Stores" style={{ height: isTablet ? "600px": "auto",width: isTablet ? "auto": "100%" }} />
                    </Box>
            </Box>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',
                 width: '40%', alignSelf: 'center', gap: 1}}>
                <Typography sx={{color: 'text.otherPrimary'}}>MULTI STORE BENEFITS</Typography>
                <Typography variant='h2'>Take Advantage of Our Multi-Store benefits</Typography>
                <Typography>Multi-Store functionality that scales with your business.</Typography>
            </Box>




            <Support />
            <ReadytoStart />
        </Box>
    );
}

export default MultiStore;