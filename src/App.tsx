import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProvidersListing from './pages/ProvidersListing'
import ProviderProfile from './pages/ProviderProfile'
import BookingFlow from './pages/BookingFlow'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileBottomNavbar from './components/layout/MobileBottomNavbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/providers" element={<ProvidersListing />} />
            <Route path="/providers/:id" element={<ProviderProfile />} />
            <Route path="/booking/:providerId" element={<BookingFlow />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNavbar />
      </div>
    </Router>
  )
}

export default App

