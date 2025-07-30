import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import customBrand from "../../../assets/Images/custom-brand.svg"
import reviewmodule from "../../../assets/Images/review-module.svg"
import plantmodule from "../../../assets/Images/plant-module.svg"
const plans = [
  {
    name: "Lite",
    subtitle: "Everything a regular store needs to process orders.",
    monthlyPrice: 50,
    yearlyPrice: 43,
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
    monthlyPrice: 75,
    yearlyPrice: 60,
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
    monthlyPrice: 110,
    yearlyPrice: 95,
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
    monthlyPrice: 325,
    yearlyPrice: 325,
    features: [
      "Everything in Grow",
      "Your own branded iOS & Android Customer Apps"
    ]
  }
];

const FAQs = [
  {faq: "Are there any hidden fees?",
   answer: "Apart from selecting your subscription plan and setup plan there are no mandatory fees with the system. There are optional additional modules and services, such as the custom branded app that carry an additional fee. Get in touch with us to discuss further."},
   {faq: "Does the service include an app for me?", 
    answer: "We include a free booking tool for your website and your store will be on the CleanCloud iOS and Android apps with your branding, which has over 140,000 downloads on iOS and Android. Once customers have selected your store in the app it will remember your store as their default. If you prefer we can build a dedicated branded app for you as an additional service or as part of the Grow+ subscription, please contact us for more information."
   },
   {faq: "What if I have more than 3,000 orders per month?", answer: "Contact us with your expected order volume per store and we will be able to provide you with your own dedicated pricing."},
   {faq: "How long does it take to be fully operational?", answer: "We can set you up overnight with our Express Onboarding, however, we generally recommend 2-6 weeks for a full thorough setup including order monitoring."},
   {faq: "Are there any contracts and can we change plans?", answer: "We don't do contracts for subscription fees unless there are exceptional circumstances. You can upgrade plans and change from monthly to annual at any time."},
   {faq: "What are your support hours?", answer: "We offer 24/7 support, our preferred support method is via ticket from within the system. However, we also offer phone support 24/7 for our Pro customers and above."},
]

const Pricing = () => {
  //Component to display pricing plans
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  
    return(
        <>
        <Box sx={{mt:'100px',display: "flex",justifyContent: "center",alignItems: "center", flexDirection: 'column'

        }}>
        <Typography sx={{fontSize: "70px"}}>Simple, predictable pricing </Typography>
        <Typography>Pay as you go service, cancel anytime.</Typography><br />
        <Box>
            <button onClick={()=> {setMonthly(true); setYearly(false)}} style={{backgroundColor: monthly ? '#29b6f6': 'white', color: monthly ? 'white': '#353839', padding: "12px 32px",
                border: "none", borderRadius: "999px", fontSize: "16px", fontWeight: "bold",
                cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}>
                Pay monthly
                </button>
            <button onClick={()=> {setMonthly(false); setYearly(true)}} style={{backgroundColor: yearly ? '#29b6f6' : 'white', color: yearly ? 'white': '#353839', padding: "12px 32px",
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
          <Box style={{display: 'flex', flexDirection: 'column'}}>
          <h3 style={{ marginTop: 0 }}>${plan.price} </h3>
          <p><span style={{ fontSize: '14px' }}> /store per month</span></p>
          </Box>
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
    <Box sx={{mt:'100px',display: "flex",justifyContent: "center",alignItems: "center", flexDirection: 'column'}}>
    <Typography sx={{fontSize: "50px"}}>Additional features</Typography>
    <Stack direction={{xs: 'column', lg: 'row'}} gap={10}>
      <Box sx={{width: '27%', display: 'flex', flexDirection: 'column', gap: 1}}>
        <Box>
          <img src={customBrand} />
        <Typography variant="h5">Custom Branded App</Typography>
        <Typography>Dedicated Branded iOS and Android apps on the app stores with your branding applied</Typography>
        </Box>
      </Box>
      <Box sx={{width: '27%', display: 'flex', flexDirection: 'column', gap: 1}}>
        <Box>
        <img src={reviewmodule} />
         <Typography variant="h5">Enterprise</Typography>
         <Typography>Dedicated Branded iOS and Android apps on the app stores with your branding applied</Typography>
         </Box>
      </Box>
      <Box sx={{width: '27%', display: 'flex', flexDirection: 'column', gap: 1}}>
        <Box>
          <img src={plantmodule} />
         <Typography variant="h5">Plant Mode</Typography>
         <Typography>Manage orders from multiple stores in your central cleaning facility</Typography>
         </Box>
      </Box>
    </Stack>
    </Box>
    <Box sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
      <Typography>Frequently asked Questions</Typography>
      <Typography variant="h3">FAQS</Typography>
    </Box>
    </>
    )
}


export default Pricing;