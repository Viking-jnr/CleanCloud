import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from "./Pages/Home/View/Index"
import MultiStorePage from './Pages/Multi-StorePage/View/Index'

function App() {
  const theme= createTheme({
    palette: {
      mode: "light",
      text:{
        primary: "#353839", //black default color for text
        secondary: "#F8F8F8",//white secondary color for text
        otherPrimary: "grey",
        otherSecondary: "#29b6f6"
      },
      background:{
        default: "white", 
        paper: "white",
        other: "#0F1A30",//Dark blue background for some other components
        footer: "#eeeeee"//Dark Grey footer background
      },
      
    },
    typography:{
        fontFamily: '"Arial", "Helvetica", "sans-serif"',
      }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
          <Header />
          <main style={{flexGrow: 1}}>
            <Routes>
              <Route path="/" element= {<HomePage />} />
              <Route path='/multi-store' element= {<MultiStorePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
