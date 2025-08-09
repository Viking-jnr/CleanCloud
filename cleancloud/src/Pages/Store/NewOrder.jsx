import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getImage } from "../../Utils/ImageLoader";


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
        <Card sx={{width: 100, height: 130, alignItems: 'space-between', '&:hover': {bgcolor: '#d3ebf7ff'}}}>
            <CardActionArea onClick={handleIncrement}>
            <Box mb={1} mt={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Typography variant="caption1"  fontSize={'0.9rem'} textAlign={'center'} >
                    {clothName}
                </Typography>
            </Box>
            <CardMedia component={'img'} image={image} alt={clothName} title={clothName} sx={{height: '30%', flex:1}} />
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
        { name: 'Blouse', image: getImage('Blouse') },
        { name: 'Dress', image: getImage('Dress') },
        { name: 'Dress, Evening', image: getImage('EveningDress') },
        { name: 'Hat', image: getImage('Hat') },
        { name: 'Jacket', image: getImage('Jacket') },
        { name: 'Jeans', image: getImage('Jeans') },
        { name: 'Jumpsuit', image: getImage('Jumpsuit') },
        { name: 'Overcoat', image: getImage('Overcoat') },
        { name: 'Polo Shirt', image: getImage('Polo') },
        { name: 'Scarf', image: getImage('Scarf') },
        { name: 'Shirt', image: getImage('Shirt') },
        { name: 'Skirt', image: getImage('Skirt') },
        { name: 'Skirt, pleated', image: getImage('PleatedSkirt') },
        { name: 'Suit', image: getImage('Suit') },
        { name: 'Sweater', image: getImage('Sweater') },
        { name: 'Tie', image: getImage('Tie') },
        { name: 'Trousers', image: getImage('Trousers') },
        { name: 'Waistcoat', image: getImage('Waistcoat') },
    ]

    //Laundry clothes
    const Laundry = [
        { name: 'Laundry', image: getImage('Laundry')},
        { name: 'Duvet', image: getImage('Duvet')},
        { name: 'Duvet, cover', image: getImage('DuvetCovet')},
        { name: 'Duvet, Feather', image: getImage('DuvetFeather')},
        { name: 'Pillow Case', image: getImage('Pillow')},
        { name: 'Polo Shirt', image: getImage('PoloShirt')},
        { name: 'Sheet', image: getImage('Sheet')},
        { name: 'Shirt', image: getImage('Shirt')},
        { name: 'T-Shirt', image: getImage('T-shirt')},
        { name: 'Tablecloth', image: getImage('TableCloth')},
        { name: 'Towel, L', image: getImage('Towel')},
        { name: 'Towel, S', image: getImage('TowelS')},
    ]

    //Pressed/Ironed clothes
    const Pressed = [
        { name: 'Hat', image: getImage('Hat') },
        { name: 'Jeans', image: getImage('Jeans') },
        { name: 'Jumpsuit', image: getImage('Jumpsuit') },
        { name: 'Shirt', image: getImage('Shirt') },
        { name: 'Skirt', image: getImage('Skirt') },
        { name: 'Skirt, pleated', image: getImage('PleatedSkirt') },
    ]
    return (
        <Box ml={1} mt={2}>
            <Box>
                <Tabs value={activeTab} variant="scrollable" scrollButtons='auto' onChange={handleTabChange} sx={{'& .MuiTabs-indicator': { display: 'none'}}}>
                    <Tab label="Dry Cleaning" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: 'background.button'}}}/>
                    <Tab label="Laundry" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#76cff8ff'}}}/>
                    <Tab label="Pressed/Ironed" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#2bf195ff'}}}/>
                    <Tab label="Repairs" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#f86950ff'}}}/>
                    <Tab label="Alterations" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#f5a55bff'}}}/>
                </Tabs>

                <Box mt={2} maxWidth={{xs: '100%', lg: '65%'}} sx={{backgroundColor: 'background.footer', pb: 5, pt: 2}}>
                    {/*Dry Cleaning Section*/}
                    { activeTab === 0 && (
                        <Grid container spacing={1}>
                            {dryCleaning.map((cloth, index) => (
                                <Grid item key={index}>
                                    <Cards clothName={cloth.name} image={cloth.image} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {/*Laundry Section*/}
                    { activeTab === 1 && (
                        <Grid container spacing={1}>
                            {Laundry.map((cloth, index) => (
                                <Grid item key={index}>
                                    <Cards clothName={cloth.name} image={cloth.image} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {/*Pressed/Ironed Section*/}
                    { activeTab === 2 && (
                        <Grid container spacing={1}>
                            {Pressed.map((cloth, index) => (
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