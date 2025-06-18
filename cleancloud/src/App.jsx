import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <BrowserRouter>
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
    <Header />
    <main style={{flexGrow: 1}}></main>

    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
