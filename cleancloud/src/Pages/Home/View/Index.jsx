import { Box, Button, Link, List, ListItem, ListItemIcon, ListItemText,
    Stack, Tab, Tabs, Typography, useMediaQuery, useTheme }
     from "@mui/material"
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
import pickup_and_delivery from "../../../assets/Images/pickup_and_delivery.png"
import metrics_ipad from "../../../assets/Images/metrics_ipad.png"
import international_map from "../../../assets/Images/international_map_img.png"
import Ready from "../../../Components/Ready"
import Support from "../../../Components/Support"
import logo_epson from "../../../assets/Images/logo_epson.svg"
import logo_star from "../../../assets/Images/logo_star.svg"
import logo_zebra from "../../../assets/Images/logo_zebra.svg"
import logo_tsc from "../../../assets/Images/logo_tsc.svg"

//Styled Components
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
    tabs: {
        minHeight: 50,
        textTransform: "none", 
        "&:hover":{
            color: "#29b6f6"
        },
        fontSize: '1.5rem',
        fontWeight: 'bold',
        
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
    "Customer CRM & notifications",
    "Staff management & tracking",
    "Advanced reporting & insights"
]
//Ultimate Point of Sale list
const pos = [
    "SMS, Email & Push Notifications",
    "Receipt Printer, Tag Printer & Heat Seal support",
    "Payments & Barcode Scanner support",
    "Assisted and Auto Assembly support"
]
//Pickup and delivery services list
const pickup = [
    "Integrated web booking tool",
    "Customer and Driver apps on iOS & Android",
    "Automatic routing and scheduling",
    "Subscriptions"
]
//Grow your business list
const grow = [
    "30% increase in revenue on average",
    "Increase staff productivity",
    "Boost customer satisfaction",
    "Easily develop new revenue streams"
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
    const AnimatedUnderline = ({href, children, width, textColor}) => (
        <Link 
        href= {href}
        underline="none"
        color={textColor}
        sx={{position: "relative", display:"inline-block", textDecoration: "none", fontWeight: "bold", cursor: "pointer",
                    '&::after':{
                        content: '""',
                        position:"absolute",
                        left: 0, bottom:0,
                        width: "0", height: "4px",
                        backgroundColor: "#29b6f6",
                        transition: 'width 0.5s ease-in-out'

                    },
                    "&:hover::after":{
                        width: {width}
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
        {/*Business Types Tabs*/}
        <Box >
            <Tabs value={activeTab}  variant="scrollable" onChange={handleTabChange} aria-label="Business Tabs"
                 sx={{justifySelf: "center", '& .MuiTabs-indicator':{display: 'none'}}} textColor="inherit">
                <Tab label= "Dry Cleaning" 
                sx={{...Styles.tabs, backgroundColor: activeTab===0 ? "text.otherSecondary": "background.default", color: activeTab===0 ? "text.secondary":"text.primary",
                     borderRadius: '30px'}}/>
                <Tab label= "Laundromart" 
                sx={{...Styles.tabs, backgroundColor: activeTab===1 ? "text.otherSecondary": "background.default", color: activeTab===1 ? "text.secondary":"text.primary",
                     borderRadius: '30px'}} />
                <Tab label= "Alterations" 
                sx={{...Styles.tabs, backgroundColor: activeTab===2 ? "text.otherSecondary": "background.default", color: activeTab===2 ? "text.secondary":"text.primary",
                     borderRadius: '30px'}} />
                <Tab label = "Shoe Cleaning" 
                sx={{...Styles.tabs, backgroundColor: activeTab===3 ? "text.otherSecondary": "background.default", color: activeTab===3 ? "text.secondary":"text.primary",
                     borderRadius: '30px'}} />
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
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"30%"} textColor={"text.secondary"} />
                    
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
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"30%"} textColor={"text.secondary"} />
                    
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
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"30%"} textColor={"text.secondary"} />
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
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"30%"} textColor={"text.secondary"} />
                    
                </Box>
            </Box>
        )}
        {/*Used by the best*/}
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",width: "100%", justifyContent: "space-between"}}>
            <Typography variant="h3">Used by the best</Typography>
            <Box display={"flex"} gap={10} >
                <img src={logo_morellis} style={{height:"70px", width: "200px"}} />
                <img src={logo_jeeves} style={{height:"100px", width: "120px"}} />
                <img src={logo_al_jabr} style={{height:"100px", width: "200px"}} />
                <img src={logo_giralda} style={{height:"100px", width: "150px"}} />
                <img src={logo_eastern_dry_cleaners} style={{height:"100px", width: "150px"}} />
            </Box>
            <AnimatedUnderline href={"/features"} children={"See all customer stories   →"} width={"90%"} textColor={"text.primary"} />
        </Box>

        {/*Ultimate Point of Sale*/}
        <Box sx={{display: "flex", flexDirection: isTablet ? "column":"row", gap: "20px"}}>
            <Box pl={20} pr={0} py={7} sx={{width: isTablet ? "100%": "40%", display: "flex", flexDirection: "column", gap: "20px"}}>
                <Typography top={0} left={0} color="text.otherPrimary">POS</Typography>
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
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"90%"} textColor={"text.primary"} />
                    <Button sx={{...Styles.buttons, width: "30%"}}>
                    Try for free
                    </Button>
            </Box>
            <Box sx={{width: isTablet ? "100%": "60%"}}>
                <img src={ultimate_pos} height={"700px"} width={"100%"} />
            </Box>
        </Box>
        {/*Pickup and delivery services*/}
        <Box sx={{display: "flex", flexDirection: isTablet ? "column-reverse":"row"}}>
            <Box pl={20} pr={0} py={7}  sx={{width: isTablet ? "100%": "40%"}}>
                <img src={pickup_and_delivery} height={"500px"} width={"100%"} />
            </Box>

            <Box pl={20} pr={0} py={7} sx={{width: isTablet ? "100%": "40%", display: "flex", flexDirection: "column", gap: "20px"}}>
                <Typography top={0} left={0} color="text.otherPrimary">REACH YOUR CUSTOMERS</Typography>
                <Typography variant="h2" >Pickup and Delivery Services </Typography>
                <Typography variant="body3">Launch an advanced app & website powered pickup and delivery service overnight.</Typography>
                <List>
                        {pickup.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.primary"}}} />
                            </ListItem>
                        ))}
                    </List>
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"50%"} textColor={"text.primary"} />
            </Box>
        </Box>

        {/*Growing Business*/}
        <Box sx={{display: "flex", flexDirection: isTablet ? "column":"row", gap: "20px"}}>
            <Box pl={20} pr={0} py={7} sx={{width: isTablet ? "100%": "50%", display: "flex", flexDirection: "column", gap: "20px"}}>
                <Typography top={0} left={0} color="text.otherPrimary">GROW YOUR BUSINESS</Typography>
                <Typography variant="h2" >Proven to help grow your business </Typography>
                <List>
                        {grow.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircle sx={{color: "#29b6f6"}} />
                                </ListItemIcon>
                                <ListItemText primary={text} slotProps={{primary: {color:"text.primary"}}} />
                            </ListItem>
                        ))}
                    </List>
                    <AnimatedUnderline href={"/features"} children={"Find out more about the product   →"} width={"40%"} textColor={"text.primary"} />
            </Box>
            <Box pl={5} sx={{width: isTablet ? "100%": "50%"}}>
                <img src={metrics_ipad} height={"500px"} width={"100%"} />
            </Box>
        </Box>
        {/*Global Presence*/}
        <Box sx={{alignItems: "center", display: "flex", flexDirection: "column", gap: "20px"}}>
            <Typography color="text.otherPrimary">GLOBAL PRESENCE</Typography>
            <Typography variant="h2">Trusted and loved globally</Typography>
            <Typography sx={{fontSize: 20}}>Serving thousands of the most innovative laundromats and dry cleaners in over 100 countries.</Typography>
            <img src={international_map} width={isTablet ? "100%":"80%"} height={"600px"} />
        </Box>
        <Box sx={{display: "flex", flexDirection: isTablet ? "column":"row", alignItems: "center",
         justifyContent: "center", gap: isTablet ? "20px":"30px"}}>

            <Box sx={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h2" color="text.otherSecondary">$950M+</Typography>
                <Typography>Transactions</Typography>
            </Box>

            <Box sx={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center",
             borderLeft: "2px solid", borderColor: "text.otherPrimary", pl: 5, pr: 5}}>
                <Typography variant="h2" color="text.otherSecondary">10 Million+</Typography>
                <Typography>Customers</Typography>
            </Box>

            <Box sx={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center",
            borderLeft: "2px solid", borderColor: "text.otherPrimary", pl: 5, pr: 5}}>
                <Typography variant="h2" color="text.otherSecondary">5,000+</Typography>
                <Typography>Locations</Typography>
            </Box>
        </Box>
        {/*Integrated with the best*/}
        <Box sx={{alignItems:"center", justifyContent: "center", display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h3" sx={{fontWeight: "bold"}}>Integrated with the best</Typography>
            <Stack direction = 'row' spacing={15}>
                <img src={logo_epson} alt ="Epson Logo" />
                <img src={logo_star} alt ="Star Logo" />
                <img src={logo_zebra} alt ="Zebra Logo" />
                <img src={logo_tsc} alt ="TSC Logo" />
            </Stack>
        </Box>
        


            <Support />   
            <Ready />
        </Box>
    )
}

export default Home;