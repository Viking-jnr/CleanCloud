import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../../assets/Images/CleanCloud_Icon_White.svg";


const Store = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Img src={Logo} alt="CleanCloud Logo" style={{ height: "50px", marginRight: "20px" }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Store;