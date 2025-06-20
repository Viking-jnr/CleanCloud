import { Box, Link, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import FooterLogo from "../assets/Images/logo_footer.svg";
import { Email, Facebook, Instagram, LinkedIn, Smartphone, Style, Twitter, YouTube } from "@mui/icons-material";


//Styling components
const Styles = {
    boxes: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: {
            xs: "100%",
            sm: "75%",
            md: "30%",
            lg: "15%",
            xl: "13%"
        }
    },
    link: {
        textDecoration: "none",
        color: "#616161",
        cursor: "pointer"
    }
}

function Footer(){
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

return(
    <footer style={{ backgroundColor: "#eeeeee",paddingTop: "100px"}}>
        <Box sx={{display: "flex", flexDirection: "column", paddingLeft: { xs: "0", sm: "100px", md: "150px", xl: "200px"},
         paddingRight: { xs: "0", sm: "100px", md: "150px", xl: "200px"}, gap: "30px"}}>
        {/*The Logo*/}
        <Box>
            <img src={FooterLogo} alt="CleanCloud" />
        </Box>

        <Box sx={{ display: "flex", flexDirection:isTablet ? "column": "row" }}>
            <Box sx={{width: "50%"}}>
                <Typography variant="h6" fontWeight={"bold"} fontSize={25} color="#353839">Need help?</Typography>
                <Typography color="#353839" fontSize={25}>CleanCloud support is available 24/7</Typography>
            </Box>
             {/*Push the boxes to the right*/}
                <Box sx={{flex: 1}}></Box>
            <Box component={Paper} gap={5} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "15px"}}>
                <Box gap={2} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "15px"}}>
                <Paper sx={{padding: "10px", alignItems: "center", backgroundColor: "#E0E0E0"}}>
               <Smartphone fontSize="large" sx={{color: " #29b6f6"}} />
               </Paper>
               <Typography>CALL US<br />
              <b>+1 (415) 212 5626</b></Typography>
               </Box>
               <Box gap={2} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "15px"}}>
                <Paper sx={{padding: "10px", alignItems: "center", backgroundColor: "#E0E0E0"}}>
                    <Email fontSize="large" sx={{color: " #29b6f6"}} />
                </Paper>
                <Typography>CONTACT US<br />
                <Link sx={{textDecoration: "none", color:"black", "&:hover":{color: "#29b6f6", cursor: "pointer"}}}><b>Contact Form</b></Link></Typography>
               </Box>
            </Box>
        </Box>

            <Box sx={{display: "flex", flexDirection: "row", gap: "50px"}}>
                {/*CleanCloud*/}
                <Box sx={Styles.boxes}>
                    <Typography fontWeight={"bold"}>CleanCloud</Typography>
                    <Typography variant="body3" fontWeight={"200"} color="#616161">The No.1 Point of Sale Software, Delivery Apps, and Platform for Dry Cleaners, Laundromats, and Shoe Cleaners</Typography>
                    <Stack direction={"row"} gap={2}>
                        <Facebook fontSize="small" />
                        <Twitter fontSize="small" />
                        <YouTube fontSize="small" />
                        <LinkedIn fontSize="small" />
                        <Instagram fontSize="small" />
                    </Stack>
                </Box>
                {/*Platforms*/}
                <Box sx={Styles.boxes}>
                    <Typography fontWeight={"bold"}>Platform</Typography>
                    <Link sx={Styles.link}>Features</Link>
                    <Link sx={Styles.link}>Multi-Store</Link>
                    <Link sx={Styles.link}>Pickup and Delivery</Link>
                    <Link sx={Styles.link}>Website Builder</Link>
                    <Link sx={Styles.link}>Grow Your Business</Link>
                    <Link sx={Styles.link}>Testimonials</Link>
                    <Link sx={Styles.link}>Payroll</Link>
                    <Link sx={Styles.link}>Pricing</Link>
                    <Link sx={Styles.link}>Integrations</Link>
                </Box>
                {/*Resources*/}
                <Box sx={Styles.boxes}>
                    <Typography fontWeight={"bold"}>Resources</Typography>
                    <Link sx={Styles.link}>Sign Up</Link>
                    <Link sx={Styles.link}>Contact Us</Link>
                    <Link sx={Styles.link}>Product Updates</Link>
                    <Link sx={Styles.link}>Blog</Link>
                    <Link sx={Styles.link}>API</Link>
                </Box>
                {/*Business Types*/}
                <Box sx={Styles.boxes}>
                    <Typography fontWeight={"bold"}>Business Types</Typography>
                    <Link sx={Styles.link}>Dry Cleaning</Link>
                    <Link sx={Styles.link}>Laundromats</Link>
                    <Link sx={Styles.link}>Shoe Cleaning</Link>
                </Box>
                {/*Featured Blogs*/}
                <Box sx={Styles.boxes}>
                    <Typography fontWeight={"bold"}>Featured Blogs</Typography>
                    <Link sx={Styles.link}>How to Buy a Laundromart</Link>
                    <Link sx={Styles.link}>Build a Website for you Laundry Business</Link>
                    <Link sx={Styles.link}>Key Metrics for Laundromat Success</Link>
                </Box>
            </Box>
            <hr style={{width: "100%", color: "grey"}} />
            <Stack direction={"row"} gap={3} alignItems={"center"} justifyContent={"center"} padding={"5px"}>
            <Typography color="#616161">&copy;2014-2025 CleanCloud</Typography>
            <Link sx={Styles.link}>Language: English</Link>
            {/*Push the terms to the right*/}
            <Box sx={{flex: 1}}></Box>
            <Link sx={Styles.link}>Terms: Privacy</Link>
            </Stack>
            </Box>
         </footer>
)
}

export default Footer;