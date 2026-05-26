import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { label: "Главная",         screen: "home" },
  { label: "Обо мне",         screen: "about" },
  { label: "Мои услуги",      screen: "services" },
  { label: "Стоимость услуг", screen: "price" },
  { label: "Отзывы",          screen: "reviews" },
  { label: "Контакты",        screen: "contacts" },
];

function Nav({ onMenuClick, activePage }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map(({ label, screen }) => (
          <li key={screen} className={styles.item}>
            <a
              href="#"
              className={`${styles.link} ${activePage === screen ? styles.active : ""}`}
              onClick={(e) => { e.preventDefault(); onMenuClick(screen); }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
