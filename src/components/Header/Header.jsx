import Nav from "./Nav/Nav";
import HeroTitle from "./HeroTitle/HeroTitle";
import SocialLinks from "./SocialLinks/SocialLinks";
import styles from "./Header.module.css";

function Header({ onMenuClick }) {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Nav onMenuClick={onMenuClick} />
      </header>
      <HeroTitle />
      <p className={styles.subtitle}>Лёгкая легализация в Польше</p>
      <SocialLinks />
    </div>
  );
}

export default Header;
