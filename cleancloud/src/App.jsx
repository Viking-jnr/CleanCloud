import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from "./Pages/Home/View/Index"

function App() {
  const theme= createTheme({
    palette: {
      mode: "light",
      text:{
        primary: "#1C1C1C", //black default color for text
        secondary: "#f0f0f0",//white secondary color for text
      },
      background:{
        default: "white", 
        paper: "white"
      },
    },
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
    </Routes>
    </main>

    <Footer />
    </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
