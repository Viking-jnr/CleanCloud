import { AppBar, Box, Button, Container, styled, Toolbar } from "@mui/material"
import Logo from "../assets/Images/CleanCloudLogo.svg"



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
    return(
        <AppBar position="static" sx={{backgroundColor: "white", position: " fixed", zIndex: " 1000", paddingLeft: "200px", paddingRight: "300px"}}>
            <Container maxWidth="xl">
                <Toolbar sx={{display:"flex", flexDirection: "row"}}>
                    <Box sx={{width: "30%", marginLeft:"10px"}}>
                    <img src={Logo} alt="CleanCloud" />
                    </Box>
                    <Box sx={{width: "50%", gap: "20px"}}>
                        <NavButton>Features</NavButton>
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