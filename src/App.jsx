/* eslint-disable react/no-unknown-property */

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurWork from "./components/OurWork"


function App() {

  return (
    <div>
      <Navbar />
      <div className="lg:mx-[70px]">
        <Hero />
        
      </div>
      <OurWork />
      
    </div>
  )
}

export default App
