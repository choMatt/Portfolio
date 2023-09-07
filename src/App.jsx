import { useState } from 'react'
import "../src/styles/global.css"
import Navigation from '../src/components/Navigation'
import Hero from '../src/components/Hero'

function App() {

  return (
      <div>
        <Navigation />
        <main>
          <Hero />
       </main>
      </div>
  )
}

export default App
