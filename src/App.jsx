import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
