import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Images/Logo-Photoroom.png"
import { Box, Button, Collapse, Container, IconButton, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://cleancloud.onrender.com/auth/login",
                { email, password },
                {headers: { "Content-Type": "application/json"}}
            );
            const token = response.data.token;
            console.log("Logged in successful! JWT:", token);
            navigate("/");

            localStorage.setItem('authToken', token);
            localStorage.setItem('email', email);
        }catch (err) {
            console.error("Login Failed!", err);
        }
        
    }
    //Collapse Dropdown for reset button
    const [reset, setReset] = useState(false);
    const showReset = () => {
        setReset(!reset);
    }


    return(
        <Box sx={{display: "flex", flexDirection: "column", maxWidth: '100vw'}}>
        <Box ml={10}>
        <img src={Logo} alt="Digital Solutions" onClick={() => navigate("/")} style={{height: '150px', width: '200px'}} />
        </Box>

        <Container maxWidth="sm" sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  gap: '10px'}} >
            <Typography variant="h3" textAlign={'center'}>Log in</Typography>
            <Typography fontWeight={'bold'}>
                Don't have an account? 
                <span style={{color: '#29b6f6', cursor: 'pointer'}} onClick={() => navigate("/sign-up")}>
                    Sign up
                </span>
            </Typography>
            <Box component={'form'} sx={{display: 'flex',gap: '10px', flexDirection: 'column'}}>
                <InputLabel sx={{color: 'text.otherPrimary'}} >Email</InputLabel>
                <TextField 
                type="email" value={email} required onChange={(e) => setEmail(e.target.value)} 
                slotProps={{input: {
                    endAdornment: <EmailOutlined sx={{color: 'text.otherPrimary'}} />
                }}}
                />
                <InputLabel sx={{color: 'text.otherPrimary'}} >Password</InputLabel>
                <TextField 
                type= {showPassword ? "text": "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                slotProps={{input: {
                    endAdornment: <IconButton edge='end' onClick={handleShowPassword}>
                        {showPassword ? <VisibilityOff fontSize="small" />: <Visibility fontSize="small" />} 
                    </IconButton>
                }}}
                />
                <Button variant="contained" type="submit"  sx={{backgroundColor: 'background.button', mt: 3, mb: 3, fontWeight: 'bold', textTransform: 'none',
                     '&:hover': { backgroundColor: 'background.default', color: 'text.otherSecondary'}
                }} onClick={handleLogin}>
                    Log in
                </Button>
                <Typography component={Button} onClick={showReset} sx={{textTransform: 'none', color: 'text.primary'}}>Forgot Password</Typography>
                <Collapse in={reset} timeout={'auto'} unmountOnExit >
                <Box  sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <InputLabel sx={{color: 'text.otherPrimary'}} >Email</InputLabel>
                    <TextField 
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                    slotProps={{input: {
                        endAdornment: <EmailOutlined sx={{color: 'text.otherPrimary'}} />
                    }}}
                    />
                    <Button variant="contained" type="submit"  sx={{backgroundColor: 'background.button', mt: 3, mb: 3, fontWeight: 'bold', textTransform: 'none',
                     '&:hover': { backgroundColor: 'background.default', color: 'text.otherSecondary'}
                }} >
                    Reset Password
                </Button>
                </Box>
                </Collapse>
            </Box>


        </Container>


        </Box>
    )
}

export default Login;