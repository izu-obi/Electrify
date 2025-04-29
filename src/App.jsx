import { Routes, Route } from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsofService from './pages/TermsOfService'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import ScrollToTop from "./components/ScrollToTop.jsx"


function App() {

  return (
      <>
    <div className="relative min-h-screen w-full z-70">

      <div className="background-pattern relative min-h-screen z-60">
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsofservice" element={<TermsofService />} />
        </Routes>
        <Footer/>
      </div>

    </div>

    </>
  )
}

export default App
