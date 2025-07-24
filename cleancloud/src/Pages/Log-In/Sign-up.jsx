import { Box, Container, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import Logo from "../../assets/Images/Logo-Photoroom.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Countries from "../../data.json";

//Styled Components
const Styles = {
    input : {
        color: "text.primary",
        fontWeight: "bold"
    }
}

//Business Types
const businessTypes = [
    "Dry Cleaning", "Laundromart", "Alterations", "Shoe/ Sneaker Services"
]
const numberOfStores = [
    "No physical store- pickup and delivery only","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20 or more" 
]

const SignUp = () => {
    const navigate = useNavigate();
    const [companyDetails, setCompanyDetails] = useState({
        companyName: "",
        city: "",
        country: "",
        primaryBusinessType: "",
        numberOfStores: ""
    });
    const handleChange = (e) => {
        setCompanyDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    return(
        <Box sx={{display: "flex", flexDirection: "column", maxWidth: '100vw'}}>
        <Box ml={10}>
            <img src={Logo} alt="Digital Solutions" onClick={() => navigate("/")} style={{height: '150px', width: '200px'}} />
        </Box>
        <Container maxWidth= "md" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', mb: 10}}>
            <Typography variant="h2" fontWeight={'bold'}>Start your free trial</Typography>
            <Typography color="text.otherPrimary">You'll be ringing up sales in under 3 minutes.</Typography>
            <Typography color="text.otherPrimary">No credit card required!</Typography><br/> <br/>
            <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', width: '100%'}}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>Your Company Details</Typography>
                <InputLabel sx={Styles.input} >Company Name</InputLabel>
                <TextField type="text" fullWidth value={companyDetails.companyName} name="companyName" onChange={handleChange}/>
                <InputLabel sx={Styles.input} >City</InputLabel>
                <TextField type="text" fullWidth value={companyDetails.city} name="city" onChange={handleChange}/>
                <InputLabel sx={Styles.input} >Country</InputLabel>
                <Select type="text" fullWidth value={companyDetails.country} name="country" onChange={handleChange}>
                    {Countries.map((country, index) => (
                        <MenuItem key={index} value={country.countryName}>{country.countryName} </MenuItem>
                    ))}
                </Select>
               
                   
                
                <InputLabel id="business-types" sx={Styles.input} >Primary Business Types</InputLabel>
                <Select type="text" labelId="business-types" fullWidth value={companyDetails.primaryBusinessType} name="primaryBusinessType" onChange={handleChange}>
                    {businessTypes.map((type, index) => (
                        <MenuItem key={index} value={type} >{type} </MenuItem>
                    ))}
                </Select>
                <InputLabel sx={Styles.input} >Number of Stores</InputLabel>
                <Select type="text" fullWidth value={companyDetails.numberOfStores} name="numberOfStores" onChange={handleChange}
                sx={{height: "50px"}}>
                    {numberOfStores.map((num, index) => (
                        <MenuItem key={index} value={num}>{num} </MenuItem>
                    ))}
                </Select>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>Your Details</Typography>
                <InputLabel sx={Styles.input} >Your Name</InputLabel>
                <TextField type="text" fullWidth />
                <InputLabel sx={Styles.input} >Phone Number</InputLabel>
                <TextField type="number" fullWidth />
                <InputLabel sx={Styles.input} >Email Address</InputLabel>
                <TextField type="email" fullWidth />
                <InputLabel sx={Styles.input} >Password</InputLabel>
                <TextField type="password" fullWidth />
            </Paper>
        </Container>


        </Box>
    );
}
export default SignUp;