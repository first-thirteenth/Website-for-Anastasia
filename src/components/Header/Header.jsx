import HeroTitle from "./HeroTitle/HeroTitle";
import SocialLinks from "./SocialLinks/SocialLinks";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <HeroTitle />
      <p className={styles.subtitle}>Лёгкая легализация в Польше</p>
      <SocialLinks />
    </div>
  );
}

export default Header;
