import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SocialProof from './components/SocialProof'
import AIPreview from './components/AIPreview'
import PopularDestinations from './components/PopularDestinations'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import RegionDestinations from './components/RegionDestinations'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SocialProof />
      <AIPreview />
      <PopularDestinations />
      <Features />
      <HowItWorks />
      <Testimonials />
      <RegionDestinations />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
