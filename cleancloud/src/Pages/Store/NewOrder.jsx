import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Blouse from '../../assets/Images/Blouse.png';
import Dress from '../../assets/Images/Dress.png';
import Hat from '../../assets/Images/Hat.png';
import EveningDress from '../../assets/Images/EveningDress.png';
import Jacket from '../../assets/Images/Jacket.png';
import Jeans from '../../assets/Images/Jeans.png';
import Jumpsuit from '../../assets/Images/Jumpsuit.png';
import Overcoat from '../../assets/Images/Overcoat.png';
import Polo from '../../assets/Images/Polo.png';

//styles
const styles = {
    tab: {
        color: 'text.primary',//color when inactive
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '16px',
        px: 5
    },

}

//Reusable component for cards
const Cards = ({ clothName, image }) => {
    const [ count, setCount ] = useState(0);
    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

    const handleInput = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >=0) {
            setCount(value);
        } else if (e.target.value === ''){
            setCount(0);
        }
    };

    return (
        <Card sx={{width: 105, height: 150, alignItems: 'space-between'}}>
            <CardActionArea onClick={handleIncrement}>
            <Box mb={1} mt={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Typography variant="caption1"  fontSize={'0.9rem'} textAlign={'center'} >
                    {clothName}
                </Typography>
            </Box>
            <CardMedia component={'img'} image={image} alt={clothName} sx={{height: '30%', flex:1}} />
            </CardActionArea>
        { count > 0 && (
            <Box  sx={{ display: 'flex', alignItems: 'center'}}>
                <TextField type='text' variant="outlined" value={count} onChange={handleInput}
                sx={{ height: '20px', width: '70px',   '& .MuiOutlinedInput-root':
                    { bgcolor: 'background.button',borderRadius: '10px', height: '100%', width: '100%', paddingRight: 0,
                         '& input': { color: 'text.secondary', textAlign: 'center', height: '100%', width: '100%', fontSize: '10px'}}
                  }} 
                 />
                 
                <Button onClick={handleDecrement} disabled= {count === 0} sx={{color: 'text.primary', bgcolor: 'background.default', fontWeight: 'bold'}}>
                    - 
                </Button>
            </Box>
        )}

        </Card>
    );
}

const NewOrder = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (e, newTab) => {
        setActiveTab(newTab);
    }

    //Dry cleaning clothes 
    const dryCleaning = [
        { name: 'Blouse', image: Blouse },
        { name: 'Dress', image: Dress },
        { name: 'Dress, Evening', image: EveningDress },
        { name: 'Hat', image: Hat },
        { name: 'Jacket', image: Jacket },
        { name: 'Jeans', image: Jeans },
        { name: 'Jumpsuit', image: Jumpsuit },
        { name: 'Overcoat', image: Overcoat },
        { name: 'Polo', image: Polo }
    ]
    return (
        <Box ml={1} mt={2}>
            <Box>
                <Tabs value={activeTab} variant="scrollable" onChange={handleTabChange} sx={{'& .MuiTabs-indicator': { display: 'none'}}}>
                    <Tab label="Dry Cleaning" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: 'background.button'}}}/>
                    <Tab label="Laundry" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#76cff8ff'}}}/>
                    <Tab label="Pressed/Ironed" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#2bf195ff'}}}/>
                    <Tab label="Repairs" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#f86950ff'}}}/>
                    <Tab label="Alterations" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#f5a55bff'}}}/>
                </Tabs>

                <Box mt={2}>
                    { activeTab === 0 && (
                        <Grid container spacing={2}>
                            {dryCleaning.map((cloth, index) => (
                                <Grid item key={index}>
                                    <Cards clothName={cloth.name} image={cloth.image} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </Box>
            
        </Box>
    );
}

export default NewOrder;