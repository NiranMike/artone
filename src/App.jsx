/* eslint-disable react/no-unknown-property */

import Design from "./components/Design"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurWork from "./components/OurWork"
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
    </div>
  )
}

export default App
