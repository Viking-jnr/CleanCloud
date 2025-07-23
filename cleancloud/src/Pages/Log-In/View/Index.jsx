import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Images/Logo-Photoroom.png"
import { Box, Typography } from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
    return(
        <Box sx={{display: "flex", flexDirection: "column"}}>
        <Box ml={10}>
        <img src={Logo} alt="Digital Solutions" onClick={() => navigate("/")} style={{height: '150px', width: '200px'}} />
        </Box>
        <Box mt={3} sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignSelf: 'center',  maxheight: '100vh'}}>
            <Typography variant="h3">Log in</Typography>
            <Typography>
                Don't have an account? 
                <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => navigate("/sign-up")}>
                    Sign up
                </span>
            </Typography>

        </Box>


        </Box>
    )
}

export default Login;