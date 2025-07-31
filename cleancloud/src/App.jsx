import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from "./Pages/Home/View/Index"
import MultiStorePage from './Pages/Multi-StorePage/View/Index'
import Features from './Pages/Features/View/Index'
import Pricing from './Pages/Pricing/View/Index'
import Login from './Pages/Log-In/View/Index'
import SignUp from './Pages/Log-In/Sign-up'
import ResetPassword from './Pages/Log-In/ResetPassword'

//App content function to display header and footer only when one is logged in
function AppContent (){
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/log-in'|| location.pathname=== "/sign-up" || location.pathname === '/reset-password';
  const hideFooter = location.pathname === '/log-in' || location.pathname === '/reset-password'

  return(
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
          {!hideHeaderFooter && <Header /> }
          <main style={{flexGrow: 1}}>
            <Routes>
              <Route path="/" element= {<HomePage />} />
              <Route path='/log-in' element={<Login />} />
              <Route path='/multi-store' element= {<MultiStorePage />} />
              <Route path='/features' element={<Features />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/reset-password' element={<ResetPassword />} />
            </Routes>
          </main>

          {(!hideHeaderFooter || !hideFooter) && <Footer />}
        </div>
  )
}

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      text: {
        primary: "#353839", //black default color for text
        secondary: "#F8F8F8",//white secondary color for text
        otherPrimary: "grey",
        otherSecondary: "#29b6f6"
      },
      background: {
        default: "white",
        paper: "white",
        other: "#0F1A30",//Dark blue background for some other components
        button: "#29b6f6",//Light blue for some buttons
        footer: "#eeeeee"//Dark Grey footer background
      },
    },
    breakpoints: {
      values: {
        xs: 0,      // mobile
        sm: 600,    // tablets
        md: 900,    // small laptops
        lg: 1200,   // desktops
        xl: 1536    // large screens
      }
    },
    typography: {
      fontFamily: '"Arial", "Helvetica", "sans-serif"',
    }
  });

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App