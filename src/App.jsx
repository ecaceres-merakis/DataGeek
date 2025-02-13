import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { Contact } from "./components/contact";
import WhatsAppButton from "./components/WhatsAppButton";
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      
      <Services data={landingPageData.Services} />
      <Gallery />
      <About data={landingPageData.About} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer}/>
      <WhatsAppButton />
    </div>
  )
}

export default App
