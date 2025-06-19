import { AppBar, Box, Button, Container, styled, Toolbar, Popper, Paper, Typography, Grid} from "@mui/material"
import Logo from "../assets/Images/CleanCloudLogo.svg"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { useState } from 'react'



//Styling the buttons
const NavButton = styled(Button)({
    fontWeight: "bold",
    fontSize: 13,
    color: "black", 
    textTransform: "none",
    "&:hover":{
        color:" #29b6f6"
    }
})
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen= (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleMenuClose = (e) =>{
        setAnchorEl(null);
    }
    {/* A List of the elements in Feature */}
    const Features = [
        {title: "Point of Sale", text: "Support for all devices with barcode scanners, printer, and payment support"},
        {title: "Hosted Website", text: "Get started with a professional looking website as part of your subscription"},
        {title: "Assembly", text: "Support for assembly in both your store and your plant for central cleaning facility"},
        {title: "Hardware", text: "Works with any device, PC, MAC, IOS, Android, Chromebooks"},
        {title: "Pickup and Delivery",text: "Grow your business by offering pickup and delivery"},
        {title: "Payments", text: "Use your existing card terminal or use our in-store payment integrations"},
        {title: "Lockers", text: "Use your existing card terminal or use our in-store payment integrations"},
        {title: "Reporting", text: "Use your existing card terminal or use our in-store payment integrations"},
        {title: "Multiple stores and Plant", text: "Manage the cleaning workflow for multiple stores from one place"},
        {title: "Marketing", text: "Send out marketing via SMS, targeting key sections of your customers"},
        {title: "Laundromarts", text: "Track your machine costs and repair history"},
        {title: "Security", text: "We backup your data everydat to independent servers"}
    ]
    return(
        <AppBar position="static" 
        sx={{backgroundColor: "white", position: " fixed"}}>
            <Container maxWidth="xl">
                <Toolbar sx={{display:"flex", flexDirection: "row",paddingLeft: { xs: "0", sm: "10px", md: "50px", xl: "0"},
                paddingRight: { xs: "0", sm: "10px", md: "50px", xl: "200px"}, gap: "10px"}}>
            {/* Box for the logo */}
                    <Box sx={{width: "30%", marginLeft:"10px"}}>
                        <img src={Logo} alt="CleanCloud" href="/" />
                    </Box>

            {/* Box for the Navigation buttons in the header*/}
                    <Box sx={{width: "50%", gap: "20px", display: "flex"}}>
                    {/* Box for Feature and the Drop Down Menu */}
                        <Box onMouseEnter={handleMenuOpen} onMouseLeave= {handleMenuClose}
                            aria-controls= {open ? 'Features-menu': undefined}
                            aria-haspopup= "true">
                            <NavButton endIcon={<ArrowDropDownIcon sx={{color: " #29b6f6"}}/>}>
                            Features
                            </NavButton>
                        {/* A  popper for the drop down menu */}
                            <Popper
                            id = "Features-menu"
                            open ={open}
                            anchorEl={anchorEl}
                            placement= "bottom-start"
                            disablePortal>
                            <Paper elevation={3} sx={{p: 2, width: "700px"}}>
                                <Grid container spacing={2}>
                                {Features.map((item, index)=> (
                                    <Grid item xs={6} key={index} >
                                        <Box sx={{width: "50%", p: 1, "&:hover":{backgroundColor:"#E0E0E0", boxShadow: 1, transition: "0.5s"}, cursor: "pointer"}}>
                                            <Typography> {item.title} </Typography>
                                            <Typography> {item.text} </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                                </Grid>
                            </Paper>
                            </Popper>
                        </Box>
                        <NavButton>Multi-Store</NavButton>
                        <NavButton>Testimonials</NavButton>
                        <NavButton>Pricing</NavButton>
                        <NavButton>Grow Your Business</NavButton>
                        <NavButton>Blog</NavButton>
                    </Box>
                    <Box sx={{display: "flex",gap: "10px"}}>
                        <Button sx={{textTransform: "none", display: "in-block",color: "black", backgroundColor: "#E0E0E0", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold"}}>
                            Log in
                        </Button>
                        <Button sx={{textTransform: "none", display: "in-block",color: "white", backgroundColor: " #29b6f6", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold"}}>
                            Free Trial
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;