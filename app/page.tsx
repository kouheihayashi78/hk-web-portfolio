import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ScrollHelper from './components/ui/ScrollHelper'

export default function Home() {
  return (
    <>
      <Header />
      <main className='px-6'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
      <Footer />
      <ScrollHelper />
    </>
  )
}
