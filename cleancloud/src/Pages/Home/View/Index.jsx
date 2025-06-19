import { Box, Typography } from "@mui/material"
import TabletImg from "../../../assets/Images/hero_graphic_tablet.webp"

const Home = () =>{
    return(
        <>
        <Box sx={{display:"flex", padding: 20, alignItems: "center"}}>
            <Box sx={{width:"40%"}}>
                <Typography variant="h2"><span style={{color: "#29b6f6"}}>Point of Sale</span> for Laundromats & Dry Cleaners</Typography><br /><br />
                <hr style={{width: "50px", color: "grey", float: "left"}} /><br />
                <Typography variant="h5">The All-in-one solution for Point of Sale, Pickup and Delivery Apps and more.</Typography>
            </Box>
            <Box sx={{width:"60%"}}>
            <img src={TabletImg} alt="Graphic Tablet" height={"600px"} width={"100%"} />
            </Box>
        </Box>
        </>
    )
}

export default Home;