import HeroTitle from "./HeroTitle/HeroTitle";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <HeroTitle />
      <p className={styles.subtitle}>Лёгкая легализация в Польше</p>
      {/* SocialLinks убран, чтобы не дублировать иконки на главной */}
    </div>
  );
}

export default Header;
