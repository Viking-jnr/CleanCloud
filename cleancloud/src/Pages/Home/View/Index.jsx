import { Box, Button, Card, CardContent, CardMedia, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material"
import TabletImg from "../../../assets/Images/hero_graphic_tablet.webp"
import { CheckCircle, PlayArrow, PlayCircle, Star } from "@mui/icons-material"
import { useState } from "react"
import testimonials1 from "../../../assets/Images/testimonials_hero_img.png"
import laundromat from "../../../assets/Images/laundromat_hero_image_spin.webp"
import alterations from "../../../assets/Images/alterations_hero_image.jpg"
import shoeCleaning from "../../../assets/Images/shoe-cleaning.jpg"
import logo_morellis from "../../../assets/Images/logo_morellis.png"
import logo_jeeves from "../../../assets/Images/logo_jeeves.svg"
import logo_al_jabr from "../../../assets/Images/logo_al_jabr.svg"
import logo_giralda from "../../../assets/Images/logo_giralda.png"
import logo_eastern_dry_cleaners from "../../../assets/Images/logo_eastern_dry_cleaners.svg"
import ultimate_pos from "../../../assets/Images/ultimate_pos.jpg"


const Styles ={
    buttons: {
       textTransform: "none", 
       display: "inline-block", 
       p:1, 
       backgroundColor: "blue", 
       color: "text.secondary", 
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
        
    },
    tab: {
        backgroundColor: "#0F1A30",
        display: "flex",
        justifyContent: "space-between",
    },
  
}

//Dry Cleaning Problems
    const DryCleaning = [
        "Order tracking/ management", 
        "Customer experience/ marketing",
        "Assembly and production management",
        "Staff management/ visibility"
    ]
//Laundromart Needs
const Laundromat = [
    "Staff management",
    "Machine management and tracking",
    "Customer experience and marketing",
    "Advanced reporting and insights"
]
//Alteration Problems
const Alteration = [
    "Order tracking / management",
    "checkMarketing / customer experience",
    "checkStaff management",
    "checkAdvanced reporting and insights"
]
//Shoe Cleaning Problems
const ShoeCleaning = [
    "Production & order tracking",
    "checkCustomer CRM & notifications",
    "checkStaff management & tracking",
    "checkAdvanced reporting & insights"
]
//Ultimate Point of Sale list
const pos = [
    "SMS, Email & Push Notifications",
    "checkReceipt Printer, Tag Printer & Heat Seal support",
    "checkPayments & Barcode Scanner support",
    "checkAssisted and Auto Assembly support"
]

const Home = () =>{
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    //Setting the active business tab and handling tab change
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (e, newTab) => {
        setActiveTab(newTab);
    }

    {/*Reusable underline component for links with animated underline effect*/}
    const AnimatedUnderline = ({href, children}) => (
        <Link 
        href= {href}
        underline="none"
        sx={{position: "relative", display:"inline-block", textDecoration: "none", color:"text.secondary", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: "30%"
                    }
                    }}>
                    {children}
        </Link>
    )
    return(
        <Box sx={{display:"flex", flexDirection: "column", gap:"50px"}}>
        <Box sx={{display:"flex", padding: 20, alignItems: "center", flexDirection: isTablet ? "column": "row", gap:"20px"}}>
            <Box sx={{width:isTablet ? "100%": "40%"}}>
                <Typography variant="h2" sx={{color: "text.primary"}}><span style={{color: "#29b6f6"}}>Point of Sale</span> for Laundromats & Dry Cleaners</Typography><br /><br />
                <hr style={{width: "50px", color: "grey", float: "left"}} /><br />
                <Typography variant="h5" color="text.primary">The All-in-one solution for Point of Sale, Pickup and Delivery Apps and more.</Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button sx={Styles.buttons}>
                    Try for free
                    </Button>
                    <Button sx={{textTransform: "none", p:1, borderRadius:"15px", textDecoration: "none", color: "text.primary",
                                "&:hover":{color: "#29b6f6"}}}>
                                <Typography variant="h5" >Get in touch</Typography>  <PlayCircle fontSize="large" sx={{color:"black" ,"&:hover":{color: "black"}}} />
                    </Button>
                    
                </Stack><br />
                
                <Typography sx={{color: "text.primary"}}>14-day free trial. No credit card required.<br />
                 <Star fontSize="small" sx={{color: "yellow"}}/><Star fontSize="small" sx={{color: "yellow"}}/>
                 <Star fontSize="small" sx={{color: "yellow"}}/><Star fontSize="small" sx={{color: "yellow"}}/>
                 <Star fontSize="small" sx={{color: "yellow"}}/> Capterra & GetApp<br />
                 The No. 1 reviewed software 10 years in a row</Typography>
                 

            </Box>
            <Box sx={{width:isTablet ? "100%":"60%"}}>
            <img src={TabletImg} alt="Graphic Tablet" style={{ height: isTablet ? "600px": "auto",width: isTablet ? "auto": "100%" }} />
            </Box>
        </Box>
        <Box sx={{backgroundColor: "#E0E0E0", p: 4, width:"100%", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="h5" alignItems={"center"} justifySelf={"center"} fontWeight={"bold"}>SELECT YOUR BUSINESS TYPE</Typography>
        </Box>
        <Box >
            <Tabs value={activeTab}  variant="scrollable" onChange={handleTabChange} aria-label="Business Tabs" sx={{justifySelf: "center"}}>
                <Tab label= "Dry Cleaning" sx={Styles.tabs}/>
                <Tab label= "Laundromart" sx={Styles.tabs} />
                <Tab label= "Alterations" sx={Styles.tabs}/>
                <Tab label = "Shoe Cleaning" sx={Styles.tabs}/>
            </Tabs>
        </Box>

        {/*Dry Cleaning Tab*/}
        {activeTab === 0 &&(
            <Box sx={{... Styles.tab, flexDirection: isTablet ? "column-reverse":"row"}} >
                <Box onClick={() => {window.open("https://youtu.be/d2eGNUGcdhs","youtubePopup", "width=700, height=500")} }
                sx={{cursor: "pointer", width: "70%", position: "relative"}} pl={10} pr={0} py={7}>
                    <img src={testimonials1} alt="Testimonial" width={"100%"} height={"100%"} style={{objectFit: 'cover'}} /> 

                    {/*Overlay Text*/}
                    <Box sx={{position: "absolute", bottom: '20%',left: '20%', alignItems:"center"}}>
                        <PlayCircle fontSize="large" sx={{color:"white"}} /> 
                        <Typography variant="h4" color="text.secondary">Larry Tessier (1:05)</Typography>
                        <Typography color="text.secondary">Learn how Busy Bee Cleaners grow<br /> their business with CleanCloud.</Typography>
                    </Box>
                </Box>
                <Box p={10} sx={{display:"flex",flexDirection:"column", gap: "50px"}}>
                    <Typography variant="h2" color="whitesmoke">Solving your Dry Cleaning problems</Typography>
                    <List>
                        {DryCleaning.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.secondary"}}} />
                            </ListItem>
                        ))}
                    </List>
                    <Button  sx={{color: "text.secondary", textTransform: "none", display:"flex",flexDirection:"row", border: 2, borderRadius: "30px", 
                    paddingLeft:"30px", paddingRight: "30px", alignItems: "center", width: "50%"}}
                    onClick={() => {window.open("https://youtu.be/d2eGNUGcdhs","youtubePopup", "width=700, height=500")} }>
                    <PlayArrow color="text.secondary" fontSize="large"/>
                    <Typography variant="h6">Watch Larry's Story</Typography>
                    </Button>

                    {/*Link with the animated underline effect*/}
                    <Link sx={{position: "relative", display:"inline-block", textDecoration: "none", color:"text.secondary", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: "30%"
                    }
                    }}>
                    Find out more about the product   →
                    </Link>
                    
                </Box>
            </Box>
        )}

        {/*Laundromat Tab*/}
        {activeTab === 1 && (
            <Box sx={{... Styles.tab, flexDirection: isTablet ? "column-reverse":"row"}}>
                <Box sx={{cursor: "pointer", width: "70%", position: "relative"}} pl={10} pr={0} py={7}
                onClick={() => {window.open("https://youtu.be/jYYRLj0MFDg","youtubePopup", "width=700, height=500")} }>
                    <img src={laundromat} alt="Laundromat Testimonial" style={{borderRadius: "15px"}} />
                    {/*Overlay Text*/}
                    <Box sx={{position: "absolute", bottom: '10%',left: '15%', alignItems:"center"}}>
                        <PlayCircle fontSize="large" sx={{color:"white"}} /> 
                        <Typography variant="h4" color="text.secondary">Morgan Gary (2:31)</Typography>
                        <Typography color="text.secondary">Learn how Spin Laundry Lounge grow<br /> their business with CleanCloud.</Typography>
                    </Box>
                </Box>

                <Box p={10} sx={{display:"flex",flexDirection:"column", gap: "50px"}}>
                    <Typography variant="h2" color="whitesmoke">Solving all your Laundromat needs</Typography>
                    <List>
                        {Laundromat.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.secondary"}}} />
                            </ListItem>
                        ))}
                    </List>
                    <Button  sx={{color: "text.secondary", textTransform: "none", display:"flex",flexDirection:"row", border: 2, borderRadius: "30px", 
                    paddingLeft:"30px", paddingRight: "30px", alignItems: "center", width: "50%"}}
                    onClick={() => {window.open("https://youtu.be/jYYRLj0MFDg","youtubePopup", "width=700, height=500")} }>
                    <PlayArrow color="text.secondary" fontSize="large"/>
                    <Typography variant="h6">Watch Morgan's Story</Typography>
                    </Button>

                    {/*Link with the animated underline effect*/}
                    <Link sx={{position: "relative", display:"inline-block", textDecoration: "none", color:"text.secondary", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: "30%"
                    }
                    }}>
                    Find out more about the product   →
                    </Link>
                    
                </Box>
            </Box>
        )}

        {/*Alterations Tab*/}
        {activeTab === 2 && (
            <Box sx={{... Styles.tab, flexDirection: isTablet ? "column-reverse":"row"}}>
                <Box sx={{ width: "70%", position: "relative"}} pl={10} pr={0} py={7}>
                <img src={alterations} alt="Alterations" style={{borderRadius: "15px", height: "550px"}}/>

                {/*Overlay Text*/}
                    <Box sx={{position: "absolute", bottom: '20%',left: '15%', alignItems:"center"}}>
                            <Typography variant="h4" color="text.secondary">Tailor Made London</Typography>
                            <Typography color="text.secondary">Growing their alterations and<br /> tailoring business using CleanCloud.</Typography>
                    </Box>
                </Box>

                <Box p={10} sx={{display:"flex",flexDirection:"column", gap: "50px"}}>
                    <Typography variant="h2" color="whitesmoke">Solving all your Alteration Problems</Typography>
                    <List>
                        {Alteration.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.secondary"}}} />
                            </ListItem>
                        ))}
                    </List>

                    {/*Link with the animated underline effect*/}
                    <Link sx={{position: "relative", display:"inline-block", textDecoration: "none", color:"text.secondary", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: "30%"
                    }
                    }}>
                    Find out more about the product   →
                    </Link>
                    
                </Box>
            </Box>
        )}

        {/*Shoe Cleaning Tab*/}
        {activeTab === 3 &&(
            <Box sx={{... Styles.tab, flexDirection: isTablet ? "column-reverse":"row"}}>
                <Box sx={{ width: "70%", position: "relative"}} pl={10} pr={0} py={7}>
                <img src={shoeCleaning} alt="Shoe Cleaning" style={{borderRadius: "15px", height: "500px"}}/>

                {/*Overlay Text*/}
                    <Box sx={{position: "absolute", bottom: '20%',left: '15%', alignItems:"center"}}>
                            <Typography variant="h4" color="text.secondary">Crep Protect X Adidas</Typography>
                            <Typography color="text.secondary">Growing with CleanCloud.</Typography>
                    </Box>
                </Box>

                <Box p={10} sx={{display:"flex",flexDirection:"column", gap: "50px"}}>
                    <Typography variant="h2" color="whitesmoke">Solving all your Shoe Cleaning problems</Typography>
                    <List>
                        {ShoeCleaning.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.secondary"}}} />
                            </ListItem>
                        ))}
                    </List>

                    {/*Link with the animated underline effect*/}
                    <Link sx={{position: "relative", display:"inline-block", textDecoration: "none", color:"text.secondary", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: "30%"
                    }
                    }}>
                    Find out more about the product   →
                    </Link>
                    
                </Box>
            </Box>
        )}
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",width: "100%"}}>
            <Typography variant="h3">Used by the best</Typography>
            <Box display={"flex"} gap={10} >
                <img src={logo_morellis} style={{height:"70px", width: "200px"}} />
                <img src={logo_jeeves} style={{height:"100px", width: "120px"}} />
                <img src={logo_al_jabr} style={{height:"100px", width: "200px"}} />
                <img src={logo_giralda} style={{height:"100px", width: "150px"}} />
                <img src={logo_eastern_dry_cleaners} style={{height:"100px", width: "150px"}} />
            </Box>
            <Link sx={{position: "relative", display:"inline-block", textDecoration: "none", color:"text.primary", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: "90%"
                    }
                    }}>
                    See all customer stories   →
                    </Link>
        </Box>
        <Box sx={{display: "flex", flexDirection: isTablet ? "column":"row", gap: "20px"}}>
            <Box pl={20} pr={0} py={7} sx={{width: isTablet ? "100%": "40%"}}>
                <Typography top={0} left={0}>POS</Typography>
                <Typography variant="h2" >Ultimate Point of Sale </Typography>
                <Typography variant="body3">Fully featured, powerful and easy to use POS software. For PC, Mac, iOS & Android.</Typography>
                <List>
                        {pos.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.primary"}}} />
                            </ListItem>
                        ))}
                    </List>
                    
            </Box>
            <Box sx={{width: isTablet ? "100%": "60%"}}>
                <img src={ultimate_pos} height={"700px"} width={"100%"} />
            </Box>
        </Box>




        </Box>
    )
}

export default Home;