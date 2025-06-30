import { Grid, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react"

const Features = () =>{
    const featuresList = [
        {id :"pos", title: "Point of Sale"},
        {id: "pickup", title: "Pickup and Delivery"},
        {id: "laundry", title: "Laundromat"},
        {id: "assembly", title: "Assembly"},
        {id: "lockers", title: "Lockers"},
        {id: "multi-store", title: "Multi-Store and Plant"},
        {id: "hostedWebsite", title: "Hosted Website"},
        {id: "hardware", title: "Hardware"},
        {id: "payments", title: "Payments"},
        {id: "reporting", title: "Reporing"},
        {id: "marketing", title: "Marketing"},
        {id: "security", title: "Security"},
    ]

const [selectedFeature, setSelectedFeature] = useState("pos");

return(
    <Grid container>
        <Grid item xs={12} md={3}>
            <List>
                {featuresList.map((feature)=> (
                    <ListItemButton
                    key={featuresList.id}
                    selected={selectedFeature === featuresList.id}
                    onClick={()=> setSelectedFeature(featuresList.id)}>
                        <ListItemText primary={featuresList.title} />
                    </ListItemButton>
                ))}
            </List>
        </Grid>
    </Grid>
)

}