import { Box, Button, Card, CardActionArea, CardContent, CardMedia, FormControlLabel, Grid, IconButton, Stack,
     Switch, Tab, Tabs, TextField, Typography, TableRow, TableCell } from "@mui/material";
import { useState } from "react";
import { getImage } from "../../Utils/ImageLoader";
import { Add, AddAPhotoOutlined, AddCircleOutline } from "@mui/icons-material";


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
const Cards = ({ clothName, image, addItem, photo, onCountChange }) => {
    const [ count, setCount ] = useState(0);
    const updateCount = (newCount) => {
        setCount(newCount);
        onCountChange(clothName, newCount)
    }
    const handleIncrement = () => updateCount(count + 1);
    const handleDecrement = () => updateCount(count > 0 ? count - 1 : 0);

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
            <CardActionArea onClick={(!photo && !addItem)? handleIncrement: null}>
            <Box mb={1} mt={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Typography variant="caption1"  fontSize={'0.9rem'} textAlign={'center'} >
                    {clothName}
                </Typography>
            </Box>
            <CardMedia component={'img'} image={image} alt={clothName} title={clothName} sx={{height: '30%', flex:1}} />
            { addItem && (
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <AddCircleOutline />
                    <Typography variant='caption1'>Item</Typography>
                </CardContent>
            )}

            { photo && (
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <AddAPhotoOutlined />
                    <Typography variant='caption1'>Photo</Typography>
                </CardContent>
            )}
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
    //state for the check button
    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked((prev) => !prev)


    //Dry cleaning state handler
    const [dryCleaning, setDryCleaning] = useState([
        { name: 'Blouse', image: getImage('Blouse'), price: 5.00 },
        { name: 'Dress', image: getImage('Dress'), price: 10.00 },
        { name: 'Dress, Evening', image: getImage('EveningDress'), price: 15.50 },
        { name: 'Hat', image: getImage('Hat'), price: 5.00 },
        { name: 'Jacket', image: getImage('Jacket'), price: 6.00 },
        { name: 'Jeans', image: getImage('Jeans'), price: 3.00 },
        { name: 'Jumpsuit', image: getImage('Jumpsuit'), price: 8.00 },
        { name: 'Overcoat', image: getImage('Overcoat'), price: 10.00 },
        { name: 'Polo Shirt', image: getImage('Polo'), price: 3.50 },
        { name: 'Scarf', image: getImage('Scarf'), price: 4.00 },
        { name: 'Shirt', image: getImage('Shirt'), price: 2.50 },
        { name: 'Skirt', image: getImage('Skirt'), price: 4.90 },
        { name: 'Skirt, pleated', image: getImage('PleatedSkirt'), price: 8.00 },
        { name: 'Suit', image: getImage('Suit'), price: 9.50 },
        { name: 'Sweater', image: getImage('Sweater'), price: 4.00 },
        { name: 'Tie', image: getImage('Tie'), price: 3.00 },
        { name: 'Trousers', image: getImage('Trousers'), price: 4.50 },
        { name: 'Waistcoat', image: getImage('Waistcoat'), price: 1.90 },
    ])
    

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
        { name: 'Socks', image: getImage('Socks') },
        { name: 'T-Shirt', image: getImage('P-Tshirt') },
        { name: 'Tie', image: getImage('Tie') },
        { name: 'Underpants', image: getImage('Underpants') },
    ]

    //Repairs Clothes
    const Repairs = [
        { name: '1/4 Iron', image: getImage('Iron')},
        { name: 'Leather Heel', image: getImage('LeatherHeel')},
        { name: 'Leather Sole', image: getImage('LeatherSole')},
        { name: 'Rubber Heel', image: getImage('RubberHeel')},
        { name: 'Rubber Sole', image: getImage('RubberSole')},
        { name: 'Stiletto', image: getImage('Stilletto')},
    ]

    //Alterations clothes
    const Alterations = [
        { name: 'New Zip', image: getImage('Zip')},
        { name: 'Skirt, length', image: getImage('SkirtLength')},
        { name: 'Sleeve, length', image: getImage('SleeveLength')},
        { name: 'Trouser, length', image: getImage('TrouserLength')},
        { name: 'Trouser, waist', image: getImage('TrouserWaist')},
    ]

    //State to handle card clicks
    const [cardClick, setCardClick ] = useState({});
    const handleCardClick = (name, count) => {
        setCardClick((prev) => ({
            ...prev,
            [name] : {
                count, 
                price: dryCleaning.find((item) => item.name === name )?.price || 0,
            },
        }));
    }

    return (
        <Box ml={1} mt={2} sx={{display: 'flex', flexDirection:{xs: 'column', lg: 'row'}, gap: 3 }}>
            <Box maxWidth={{xs: '100%', lg: '1000px'}}>
                <Tabs value={activeTab} variant="scrollable" scrollButtons='auto' onChange={handleTabChange} sx={{'& .MuiTabs-indicator': { display: 'none'}}}>
                    <Tab label="Dry Cleaning" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: 'background.button'}}}/>
                    <Tab label="Laundry" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#76cff8ff'}}}/>
                    <Tab label="Pressed/Ironed" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#2bf195ff'}}}/>
                    <Tab label="Repairs" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#f86950ff'}}}/>
                    <Tab label="Alterations" sx={{...styles.tab, '&.Mui-selected': {color: 'text.secondary',backgroundColor: '#f5a55bff'}}}/>
                </Tabs>

                <Box mt={2}  sx={{backgroundColor: 'background.footer', pb: 5, pt: 2}}>
                    {/*Dry Cleaning Section*/}
                    { activeTab === 0 && (
                        <Grid container spacing={1}>
                            {dryCleaning.map((cloth, index) => (
                                <Grid item key={index}>
                                    <Cards clothName={cloth.name} image={cloth.image} onCountChange={handleCardClick}/>
                                </Grid>
                            ))}
                            <Grid item>
                                    <Cards addItem={true} />
                            </Grid>
                            <Grid item>
                                    <Cards photo={true} />
                            </Grid>
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
                            <Grid item>
                                    <Cards addItem={true} />
                            </Grid>
                            <Grid item>
                                    <Cards photo={true} />
                            </Grid>
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
                            <Grid item>
                                    <Cards addItem={true} />
                            </Grid>
                            <Grid item>
                                    <Cards photo={true} />
                            </Grid>
                        </Grid>
                    )}
                    {/*Repairs Section*/}
                    { activeTab === 3 && (
                        <Grid container spacing={1}>
                            {Repairs.map((cloth, index) => (
                                <Grid item key={index}>
                                    <Cards clothName={cloth.name} image={cloth.image} />
                                </Grid>
                            ))}
                            <Grid item>
                                    <Cards addItem={true} />
                            </Grid>
                            <Grid item>
                                    <Cards photo={true} />
                            </Grid>
                        </Grid>
                    )}
                    {/*Alterations Section*/}
                    { activeTab === 4 && (
                        <Grid container spacing={1}>
                            {Alterations.map((cloth, index) => (
                                <Grid item key={index}>
                                    <Cards clothName={cloth.name} image={cloth.image}  />
                                </Grid>
                            ))}
                            <Grid item>
                                    <Cards addItem={true} />
                            </Grid>
                            <Grid item>
                                    <Cards photo={true} />
                            </Grid>
                        </Grid>
                    )}
                </Box>
                <Box>
                    <Typography>Bubble</Typography>
                </Box>
            </Box>
            <Box mr={2} display={'flex'} flexDirection={'column'} width={'50%'} gap={1}>
                <Stack direction={'row'} gap={2}>
                <TextField placeholder="Customer" fullWidth  size="small" />
                <Button sx={{bgcolor: 'background.button'}} variant="contained"><Add /></Button>
                </Stack>
                <Box sx={{display: 'flex', alignItems: 'center', backgroundColor: '#eeeeee'}} onClick={handleCheck} >
                    <Typography variant='body2' color='text.otherPrimary' sx={{flexGrow: 1}}>Express</Typography>
                    <Switch checked={checked} onChange={handleCheck}
                    sx={{'& .MuiSwitch-thumb': {
                        backgroundColor: checked ? 'background.button': 'background.default'
                    },
                '& .MuiSwitch-track':{
                    backgroundColor: 'grey'
                }}} />
            
                </Box>

                {Object.entries(cardClick).map(([name, { count, price }]) => {
                if (count > 0){
                return(
                    <Box key={name}>
                        <TextField value ={count} size='small' sx={{width: '10%','& input':{textAlign: 'left'}, '& .MuiOutlinedInput-root':{
                            '& fieldset':{border: 'none'}
                        } }} />
                        <TextField value={name} size='small' sx={{width: '50%','& input':{textAlign: 'left'}, '& .MuiOutlinedInput-root':{
                            '& fieldset':{border: 'none'}
                        } }} />
                        <TextField size='small' value={(count * price).toFixed(2)}sx={{width: '30%','& input':{textAlign: 'right'}, '& .MuiOutlinedInput-root':{
                            '& fieldset':{border: 'none'}
                        } }} />
                    </Box>
                    );}
                    return null;
                })}

            </Box>
            
        </Box>
    );
}

export default NewOrder;