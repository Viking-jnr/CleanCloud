import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"


//Styles
const Styles ={
    buttons: {
       textTransform: "none", 
       display: "inline-block", 
       p:1,  
       borderRadius:"30px",                          
       paddingLeft: "30px", 
       paddingRight: "30px", 
       cursor: "pointer" ,
       fontWeight: "bold"
    }, 
}

const Ready = () => {
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

    return (
        <Box display={"flex"} flexDirection={"column"} pl={{xs: 2, lg: 20}} pb={15} pt={10}>
            <Typography variant="h5" color="text.otherSecondary" sx={{fontWeight: "bold"}}>
                Ready to get started?
            </Typography>
            <Stack direction={isTablet ? "column":"row"} spacing={isTablet ? 5:30}>
                <Typography variant="body1" sx={{fontSize:30 }}>Trusted by thousands of businesses worldwide</Typography>
                <Box display={"flex"} gap={{xs: 5, lg: 10}}>
                    <Button sx={{...Styles.buttons, backgroundColor: "#eeeeee", color: "text.primary"}}>Ask us anything</Button>
                    <Button sx={{...Styles.buttons, backgroundColor: "blue", color:"text.secondary"}}>Start Free Trial</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default Ready;