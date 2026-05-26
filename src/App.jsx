import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import Services from "./components/sections/Services/Services";
import Prices from "./components/sections/Prices/Prices";
import Reviews from "./components/sections/Reviews/Reviews";
import Contacts from "./components/sections/Contacts/Contacts";
import styles from "./App.module.css";

const SCREEN_COLORS = {
  home: "#ff0000",
  about: "#ffb300",
  services: "#00bfff",
  price: "#00ff6a",
  reviews: "#ff00e1",
  contacts: "#222222",
};

const FADE_IN_MS = 350;
const FADE_OUT_MS = 350;

function App() {
  const [activeScreen, setActiveScreen] = useState(null);
  const [fadingOut, setFadingOut] = useState(false);
  const isAnimating = useRef(false);

  const handleMenuClick = (screen, href) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setActiveScreen(screen);
    setFadingOut(false);

    setTimeout(() => {
      // scroll instantly while the overlay covers the page
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "instant" });
      }

      setFadingOut(true);

      setTimeout(() => {
        setActiveScreen(null);
        setFadingOut(false);
        isAnimating.current = false;
      }, FADE_OUT_MS);
    }, FADE_IN_MS);
  };

  return (
    <>
      {activeScreen && (
        <div
          className={`${styles.colorScreen} ${fadingOut ? styles.fadeOut : styles.fadeIn}`}
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
  );
}

export default App;
