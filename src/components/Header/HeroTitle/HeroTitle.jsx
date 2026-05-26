import styles from "./HeroTitle.module.css";

const TITLE = "ANASTAZJA ŁAPO";

function HeroTitle() {
  return (
    <h1 className={styles.title}>
      {TITLE.split("").map((char, i) => (
        <span key={i} className={styles.letter}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default HeroTitle;
