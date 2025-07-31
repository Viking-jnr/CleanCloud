import  Typography  from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

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
        }catch (err) {
            console.error("Password reset failed:", err.response?.data || err.message);
            setMessage("Failed to reset password. Please try again.");
        }
    }

    return (
        <form onSubmit={handleReset}>
            <input type='password' placeholder="New Password" value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} required/>
            <input type='password' placeholder="Confirm New Password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button type='submit'>Reset Password</button>
            { message && (<Typography variant="body2" color="error">{message} </Typography> )}
        </form>
    );
}

export default ResetPassword;