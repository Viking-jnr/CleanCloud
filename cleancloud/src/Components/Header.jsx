import { AppBar, Box, Button, Container, styled, Toolbar, Popper, Paper, Typography, Grid, useMediaQuery, IconButton, Drawer, 
    List, ListItemButton, ListItemText, Collapse,
    Stack} from "@mui/material"
import Logo from "../assets/Images/Logo-Photoroom.png"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { ArrowDropUp, ArrowForward, Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";



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
    const theme= useTheme();
    const navigate= useNavigate();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    {/*Anchor element for drop down menu*/}
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen= (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleMenuClose = (e) =>{
        setAnchorEl(null);
    }
    {/* A List of the elements in Feature */}
    const Features1 = [
        {title: "Point of Sale", text: "Support for all devices with barcode scanners, printer, and payment support"},       
        {title: "Assembly", text: "Support for assembly in both your store and your plant for central cleaning facility"},       
        {title: "Pickup and Delivery",text: "Grow your business by offering pickup and delivery"},       
        {title: "Lockers", text: "Automate the workflow between your laundry lockers and CleanCloud"},       
        {title: "Multiple stores and Plant", text: "Manage the cleaning workflow for multiple stores from one place"},
        {title: "Laundromarts", text: "Track your machine costs and repair history"},
    ]
    const Features2 = [
        {title: "Hosted Website", text: "Get started with a professional looking website as part of your subscription"},
        {title: "Hardware", text: "Works with any device, PC, MAC, IOS, Android, Chromebooks"},
        {title: "Payments", text: "Use your existing card terminal or use our in-store payment integrations"},  
        {title: "Reporting", text: "View key statistics how your store are performing compared to other time periods"},
        {title: "Marketing", text: "Send out marketing via SMS, targeting key sections of your customers"},
        {title: "Security", text: "We backup your data everyday to independent servers"}
    ]

    {/*Drawer for navigation for smaller screens*/}
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (state) => () => {
        setOpenDrawer(state);
    }

    {/*Drop down  menu for Features in smaller screens*/}
    const [openFeatures, setOpenFeatures] = useState(false);
    const toggleFeatures = (state) => () => {
        setOpenFeatures(state);
    }

    {/*Styled components*/}
    const Styles = {
        text: {
            fontSize: 15,
            color: "text.primary"
        },
        title: {
            fontWeight: "bold"
        }
    }

    //Hover feature for the drop down menu in the feature
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hovered, setHovered] = useState(null);

    
    return(
        <>
        <AppBar position="static" 
        sx={{backgroundColor: "background.default", position: " fixed", zIndex: 1000}}>
            <Container maxWidth="xl">
                <Toolbar sx={{display:"flex", flexDirection: "row",paddingLeft: { xs: "0", sm: "10px", md: "50px", xl: "0"},
                    paddingRight: { xs: "0", sm: "10px", md: "50px", xl: "200px"}, gap: "10px"}}>
                {/* Box for the logo */}
                        <Box sx={{width: "30%", marginLeft:"10px"}}>
                            <img src={Logo} alt="CleanCloud" onClick={() => navigate("/")} style={{height: '100px'}} />
                        </Box>
                {/* Display menu icon for medium screens and below*/}
                    {isTablet && (
                        <>
                        <Box sx={{ flex: 1}}></Box>
                        <IconButton edge="end" size="large" color="black" onClick={() => setOpenDrawer(!openDrawer)}>
                            { openDrawer ? <CloseIcon /> : <MenuIcon /> }
                        </IconButton>
                        </>
                    )}

            {/* Box for the Navigation buttons in the header
                They are not shown in medium screens and below*/}
                {!isTablet && (
    
                    <Box sx={{display: "flex", flexDirection: "row", gap: "30px"}}>
                    <Box sx={{ gap: "10px", display: "flex",flexDirection: "row"}}>
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
                            <Paper elevation={5} sx={{ p: 2, display: "flex", flexDirection: "row" , width: "1000px", maxHeight: "90vh"}}>
                            {/*Items on the left*/}
                                <Grid container spacing={2} sx={{ p: 2,display:"flex", flexDirection:"column"}}>
                                {Features1.map((item, index)=> (
                                    <Grid item xs={6} key={index}  >
                                        <Link to={`/features`} style={{textDecoration: 'none',color: 'inherit'}}>
                                        <Box onMouseEnter= {() => setHoveredIndex(index)}
                                             onMouseLeave= {() => setHoveredIndex(null)}
                                             sx={{p: 1, "&:hover":{backgroundColor:"#E0E0E0", boxShadow: 1, transition: "0.8s"}, cursor: "pointer",
                                             display: "flex", justifyContent: "space-between"}}>
                                        <Box >
                                            <Typography sx={Styles.title}> {item.title} </Typography>
                                            <Typography sx={Styles.text}> {item.text} </Typography>
                                        </Box>
                                        { hoveredIndex=== index && (<ArrowForward sx={{color: 'text.otherSecondary'}} />)}
                                        </Box>
                                        </Link>
                                    </Grid>
                                ))}
                                </Grid>
                            {/* Items on the right*/}
                                <Grid container spacing={2} sx={{ p: 2,display:"flex", flexDirection:"column"}}>
                                {Features2.map((item, index)=> (
                                    <Grid item xs={6} key={index}  >
                                        <Link to={`/features`} style={{textDecoration: 'none',color: 'inherit'}}>
                                        <Box onMouseEnter= {() => setHovered(index)}
                                             onMouseLeave= {() => setHovered(null)}
                                             sx={{p: 1, "&:hover":{backgroundColor:"#E0E0E0", boxShadow: 1, transition: "0.8s"}, cursor: "pointer",
                                             display: "flex", justifyContent: "space-between"}}>
                                        <Box >
                                            <Typography sx={Styles.title}> {item.title} </Typography>
                                            <Typography sx={Styles.text}> {item.text} </Typography>
                                        </Box>
                                        { hovered=== index && (<ArrowForward sx={{color: 'text.otherSecondary'}} />)}
                                        </Box>
                                        </Link>
                                    </Grid>
                                ))}
                                </Grid>
                            </Paper>
                            </Popper>
                        </Box>
                        <NavButton onClick={() => navigate('/multi-store')}>Multi-Store</NavButton>
                        <NavButton onClick={() => navigate('/testimonials')}>Testimonials</NavButton>
                        <NavButton onClick={() => navigate('/pricing')}>Pricing</NavButton>
                        <NavButton onClick={() => navigate('/grow-your-business')}>Grow Your Business</NavButton>
                        <NavButton onClick={() => navigate('/blog')}>Blog</NavButton>
                    </Box>
                    <Box sx={{display: "flex",gap: "10px"}}>
                        <Button sx={{textTransform: "none", display: "in-block",color: "black", backgroundColor: "#E0E0E0", 
                        borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold"}}
                        onClick={() => navigate('/log-in')}>
                            Log in
                        </Button>
                        <Button sx={{textTransform: "none", display: "in-block",color: "white", backgroundColor: " #29b6f6", 
                        borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold"}}
                        onClick={() => navigate('/free-trial')}>
                            Free Trial
                        </Button>
                    </Box>
                    </Box>
                )}
                </Toolbar>
            </Container>
        </AppBar>

        {/*Navigating the drawer for mobile*/}
        <Collapse in={openDrawer}>
        <Paper  elevation={5} 
        sx={{zIndex: 900, top: "50px", py: 2, px: 2, width: "100%", display: {lg: "none"}, position: "fixed" }}>
        <List>
            <ListItemButton onClick={() => setOpenFeatures(!openFeatures)} onMouseEnter={toggleFeatures(true)} 
            sx={{'&:hover':{color: " #29b6f6", backgroundColor: "background.default"}}} >
                <ListItemText primary="Features" slotProps={{primary: {fontWeight: "bold"}}} />
                <IconButton edge="end">
                    {openFeatures ? <ArrowDropUp sx={{color: " #29b6f6"}}/> : <ArrowDropDownIcon sx={{color: " #29b6f6"}}/>}
                </IconButton>
            </ListItemButton>

            {/* Drop Down Features items */}
            {openFeatures && (
                <Paper elevation={0} onMouseLeave={toggleFeatures(false)} sx={{paddingLeft: "20px", borderTop: "none", borderRight: "none", 
                borderBottom: "none", borderLeft: "1px solid #E0E0E0"}}>
                    {["Point of Sale", "Hosted Website", "Assembly","Hardware", "Pickups and Delivery","Payments",
                     "Lockers", "Reporting", "Multiple Stores and Plant", "Marketing", "Laundromat", "Security"].map((text) => (
                <ListItemButton key={text} onClick={toggleDrawer(false)} sx={{'&:hover':{color: " #29b6f6", backgroundColor: "background.default"}}}>
                    <ListItemText primary={text} slotProps={{primary: {fontWeight: "bold"}}} />
                </ListItemButton>
            ))}
                </Paper>
            )}

            {["Multi-Store", "Testimonials", "Pricing","Grow Your Business", "Blog"].map((text) => (
                <ListItemButton key={text} onClick={toggleDrawer(false)} sx={{'&:hover':{color: " #29b6f6", backgroundColor: "background.default"}}}>
                    <ListItemText primary={text} slotProps={{primary: {fontWeight: "bold"}}} />
                </ListItemButton>
            ))}
        </List>
        <hr style={{width: "100%", color: "grey"}} />
        <Stack direction={"row-reverse"} spacing={3}>
            <Button sx={{textTransform: "none", display: "in-block",color: "text.primary", backgroundColor: "#E0E0E0",'&:hover':{backgroundColor: " #29b6f6", color:"text.secondary"}, 
                        borderRadius: "30px", paddingLeft: "30px", paddingRight: "30px", fontWeight: "bold", width:"50%"}}>
                            Log in
            </Button>
            <Button sx={{textTransform: "none", display: "in-block",color: "text.secondary", backgroundColor: " #29b6f6", 
            borderRadius: "30px", paddingLeft: "30px", paddingRight: "30px", fontWeight: "bold", width:"50%"}}>
                Free Trial
            </Button>  
        </Stack>
        </Paper>
        </Collapse>

        </>
    )
}

export default Header;