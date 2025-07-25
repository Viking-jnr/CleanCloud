import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const plans = [
  {
    name: "Lite",
    subtitle: "Everything a regular store needs to process orders.",
    price: 50,
    features: [
      "500 Orders per Month",
      "Unlimited Stations",
      "Unlimited Staff Accounts",
      "Unlimited Customers",
      "iOS & Android Apps for Customers",
      "Invoicing",
      "Basic Marketing",
      "Free Hosted Website",
      "24/7 Support (Email)"
    ]
  },
  {
    name: "Pro",
    subtitle: "Scale up with Pickup & Delivery and more.",
    price: 75,
    features: [
      "Everything in Lite",
      "2,000 Orders per Month",
      "Pickup & Delivery",
      "Route Optimization Tools",
      "Driver App",
      "Subscriptions",
      "Assisted Assembly",
      "Multi-Store Features",
      "24/7 Support (Email & Phone)"
    ]
  },
  {
    name: "Grow",
    subtitle: "For advanced workflows and large scale.",
    price: 110,
    features: [
      "Everything in Pro",
      "3,000 Orders per Month",
      "Auto Assembly",
      "Automated Marketing",
      "Automated Review Promotion",
      "Automated Invoicing",
      "Free setup of custom SMS number and email",
      "API Access"
    ]
  },
  {
    name: "Grow+",
    subtitle: "With your own dedicated branded customer app",
    price: 325,
    features: [
      "Everything in Grow",
      "Your own branded iOS & Android Customer Apps"
    ]
  }
];

const Pricing = () => {
    return(
        <>
        <Box sx={{mt:'100px',display: "flex",justifyContent: "center",alignItems: "center", flexDirection: 'column'

        }}>
        <Typography sx={{fontSize: "70px"}}>Simple, predictable pricing </Typography>
        <Typography>Pay as you go service, cancel anytime.</Typography><br />
        <Box>
            <button style={{backgroundColor: "blue", color: "white", padding: "12px 32px",
                border: "none", borderRadius: "999px", fontSize: "16px", fontWeight: "bold",
                cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}>
                Pay monthly
                </button>
            <button style={{backgroundColor: "blue", color: "white", padding: "12px 32px",
                border: "none", borderRadius: "999px", fontSize: "16px", fontWeight: "bold",
                cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
                    Pay yearly
                    </button>
        </Box><br />
        <Typography sx={{color: "lightblue"}}>Save around 20% when you pay yearly</Typography>
        

        </Box><br /><br />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontFamily: 'Arial' }}>
      {plans.map((plan) => (
        <div key={plan.name} style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          width: '250px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fff'
        }}>
          <h2 style={{ color: '#333' }}>{plan.name}</h2>
          <p>{plan.subtitle} </p>
          <h3 style={{ marginTop: 0 }}>${plan.price}<span style={{ fontSize: '14px' }}> /store per month</span></h3>
          <ul style={{ textAlign: 'left', fontSize: '14px', paddingLeft: '20px' }}>
            {plan.features.map((feature, index) => (
              <li key={index}> <CheckCircle sx={{color: 'text.otherSecondary'}} /> {feature}</li>
            ))}
          </ul>
          <button style={{backgroundColor: "darkblue", color: "white", padding: "12px 24px",
            border: "none", borderRadius: "25px", fontSize: "16px", cursor: "pointer", transition: "ease-in-out"
          }}>Get started</button>
          <Typography>No card required</Typography>
        </div>
      ))}
    </div>
    </>
    )
}


export default Pricing;