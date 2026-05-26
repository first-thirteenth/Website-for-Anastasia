import { useState, useRef } from "react";
import Nav from "./components/Header/Nav/Nav";
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

const PAGES = {
  home: Header,
  about: AboutMe,
  services: Services,
  price: Prices,
  reviews: Reviews,
  contacts: Contacts,
};

const FADE_MS = 350;

function App() {
  const [activePage, setActivePage] = useState("home");
  const [overlayColor, setOverlayColor] = useState(null);
  const [fadingOut, setFadingOut] = useState(false);
  const isAnimating = useRef(false);

  const handleMenuClick = (screen) => {
    if (isAnimating.current || screen === activePage) return;
    isAnimating.current = true;

    setOverlayColor(SCREEN_COLORS[screen]);
    setFadingOut(false);

    setTimeout(() => {
      setActivePage(screen);
      setFadingOut(true);

      setTimeout(() => {
        setOverlayColor(null);
        setFadingOut(false);
        isAnimating.current = false;
      }, FADE_MS);
    }, FADE_MS);
  };

  const ActivePage = PAGES[activePage];

  return (
    <>
      {overlayColor && (
        <div
          className={`${styles.colorScreen} ${fadingOut ? styles.fadeOut : styles.fadeIn}`}
          style={{ backgroundColor: overlayColor }}
        />
      )}
      <Nav onMenuClick={handleMenuClick} activePage={activePage} />
      <ActivePage />
    </>
  );
}

export default App;
