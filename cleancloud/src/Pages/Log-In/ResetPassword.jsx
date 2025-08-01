import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import  Typography  from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../../assets/Images/Logo-Photoroom.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
       console.log("ResetPassword component mounted");
    }, []);

    //To conditionally render the form

    const [validToken, setValidToken] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!token) {
        setError("Missing token in URL.");
        return;
        }

        axios
        .get(`https://cleancloud.onrender.com/auth/validate-token?token=${token}`)
        .then(() => setValidToken(true))
        .catch((err) => {
            const msg = err.response?.data?.error || "Invalid or expired link";
            setError(msg);
        });
    }, [token]);

    //Show error if token is missing
    if (!token) return <p>Invalid or expired link</p>;
    if (error) return <p>{error}</p>;
    if (!validToken) return <p>Validating token...</p>;

    

    const handleReset = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(
                "https://cleancloud.onrender.com/auth/reset-password",
                { token, newPassword },
                { headers: { "Content-Type": "application/json" }}
            );
            console.log("Password reset successful:", response.data);
            setMessage("Password has been reset successfully!");
            navigate('/log-in'); // Redirect to login after successful reset
        }catch (err) {
            console.error("Password reset failed:", err.response?.data || err.message);
            setMessage("Failed to reset password. Please try again.");
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100vw'}}>
            <Box ml={10}>
                <img src={Logo} alt="Digital Solutions" onClick={() => navigate("/")} style={{height: '150px', width: '200px'}} />
            </Box>

            <Container maxWidth= 'md' sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  gap: '10px'}}>
                <Typography variant="h3" textAlign={'center'}>Reset Password</Typography>

                <TextField label="New Password"
                    type= {showPassword ? "text": "password"} required value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                    slotProps={{input: {
                        endAdornment: <IconButton edge='end' onClick={handleShowPassword}>
                            {showPassword ? <VisibilityOff fontSize="small" />: <Visibility fontSize="small" />} 
                        </IconButton>
                    }}}
                />
                <TextField label="Confirm Password"
                type= {showPassword ? "text": "password"} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                slotProps={{input: {
                    endAdornment: <IconButton edge='end' onClick={handleShowPassword}>
                        {showPassword ? <VisibilityOff fontSize="small" />: <Visibility fontSize="small" />} 
                    </IconButton>
                }}}
                />
                { message && (<Typography variant="body2" color="error">{message} </Typography> )}

                <Button variant="contained" type="submit"  sx={{backgroundColor: 'background.button', mt: 3, mb: 3, fontWeight: 'bold', textTransform: 'none',
                                     '&:hover': { backgroundColor: 'background.default', color: 'text.otherSecondary'}
                                }} onClick={handleReset} >Reset Password</Button>
            </Container>
        
        </Box>
    );
}

export default ResetPassword;