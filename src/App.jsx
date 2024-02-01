/* eslint-disable react/no-unknown-property */

import Design from "./components/Design"
import DesignJourney from "./components/DesignJourney"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurWork from "./components/OurWork"
import Payroll from "./components/Payroll"
import Pricing from "./components/Pricing"
import SolutionSection from "./components/SolutionSection"
import VideoSection from "./components/VideoSection"
import Welcome from "./components/Welcome"


function App() {

  return (
    <div>
      <Navbar />
      <div className="lg:mx-[70px]">
        <Hero />
      </div>
      <OurWork />
      <Welcome />
      <Design />
      <DesignJourney />
      <Payroll />
      <SolutionSection />
      <Pricing />
      <VideoSection />
      <Footer />
    </div>
  )
}

export default App
