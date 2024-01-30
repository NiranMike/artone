/* eslint-disable react/no-unknown-property */

import Design from "./components/Design"
import DesignJourney from "./components/DesignJourney"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurWork from "./components/OurWork"
import Payroll from "./components/Payroll"
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
    </div>
  )
}

export default App
