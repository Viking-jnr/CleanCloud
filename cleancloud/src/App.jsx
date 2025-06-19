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
        primary: "#212121",
        secondary: " #29b6f6"
      }
    }
  })

  return (
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
  )
}

export default App
