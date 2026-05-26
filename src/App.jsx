import { useState } from 'react'
import Header from './components/Header/Header'
import AboutMe from './components/sections/AboutMe/AboutMe'
import Services from './components/sections/Services/Services'
import Prices from './components/sections/Prices/Prices'
import Reviews from './components/sections/Reviews/Reviews'
import Contacts from './components/sections/Contacts/Contacts'
import styles from './App.module.css'

const SCREEN_COLORS = {
  home: '#ff0000',
  about: '#ffb300',
  services: '#00bfff',
  price: '#00ff6a',
  reviews: '#ff00e1',
  contacts: '#222222',
}

function App() {
  const [activeScreen, setActiveScreen] = useState(null)

  const handleMenuClick = (screen) => {
    setActiveScreen(screen)
    setTimeout(() => setActiveScreen(null), 300)
  }

  return (
    <>
      {activeScreen && (
        <div
          className={styles.colorScreen}
          style={{ backgroundColor: SCREEN_COLORS[activeScreen] }}
        />
      )}
      <Header onMenuClick={handleMenuClick} />
      <main>
        <AboutMe />
        <Services />
        <Prices />
        <Reviews />
        <Contacts />
      </main>
    </>
  )
}

export default App
