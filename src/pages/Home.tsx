import HeroSection from '../components/hero/HeroSection'
import ServiceCategories from '../components/sections/ServiceCategories'
import TopProviders from '../components/sections/TopProviders'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <TopProviders />
      <HowItWorks />
      <Testimonials />
    </>
  )
}

export default Home

