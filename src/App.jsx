import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Header/Nav/Nav";
import Header from "./components/Header/Header";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import Services from "./components/sections/Services/Services";
import Prices from "./components/sections/Prices/Prices";
import Reviews from "./components/sections/Reviews/Reviews";
import Contacts from "./components/sections/Contacts/Contacts";
import SocialLinks from "./components/Header/SocialLinks/SocialLinks";
import styles from "./App.module.css";

const PAGES = {
  home: Header,
  about: AboutMe,
  services: Services,
  price: Prices,
  reviews: Reviews,
  contacts: Contacts,
};

const FADE_MS = 300;

function App() {
  const [activePage, setActivePage] = useState("home");
  const isAnimating = useRef(false);

  const handleMenuClick = (screen) => {
    if (isAnimating.current || screen === activePage) return;
    isAnimating.current = true;
    setActivePage(screen);
    setTimeout(() => { isAnimating.current = false; }, FADE_MS);
  };

  const ActivePage = PAGES[activePage];

  return (
    <>
      <Nav onMenuClick={handleMenuClick} activePage={activePage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
          className={styles.pageWrapper}
        >
          <ActivePage />
        </motion.div>
      </AnimatePresence>

      <SocialLinks fixed />
    </>
  );
}

export default App;
