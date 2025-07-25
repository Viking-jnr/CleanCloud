import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material"
import support from "../assets/Images/support_new.jpg"

const Support =() =>{
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    return(
        <Box pt={{xs: 10, lg: 20}}  sx={{ position: "relative", backgroundColor: "background.other", display:"flex", height: "400px",alignSelf: "center",
        width:isTablet ? "100%":"70%", borderRadius: isTablet ? "0": "20px"}}>
        <>
            {!isTablet && ( <Box component={"img"} src={support} alt="Customer Support" height={"450px"}
            sx={{position:"absolute", top: -20, left: 40}} 
            />

             )}
        </> 
            
             <Box sx={{color: "text.secondary", left:isTablet ? "5%": "50%", position: "relative", display: "flex",
             flexDirection: "column", gap: "20px", alignItems: isTablet ? "center":"left"}}>
              
                <Typography variant="h3" >Award Winning Support</Typography>
                <Typography>We've got you covered. With 99% responses within 30 minutes. </Typography>
                <Button sx={{textTransform: "none", color:"text.secondary", backgroundColor: "text.otherSecondary", width:{ xs: '50%', lg: '30%'},
                borderRadius: "20px"}}>
                    Contact Us
                </Button>
            </Box>
        </Box>
    )
}

export default Support;