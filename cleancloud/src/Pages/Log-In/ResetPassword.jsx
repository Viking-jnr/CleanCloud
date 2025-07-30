import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    //Show error if token is missing
    if (!token) return <p>Invalid or expired link</p>;

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
            <Typography variant="body2" color="error">{message} </Typography>
        </form>
    );
}

export default ResetPassword;