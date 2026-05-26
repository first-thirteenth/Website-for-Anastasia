import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { label: "Главная", href: "#", screen: "home" },
  { label: "Обо мне", href: "#about", screen: "about" },
  { label: "Мои услуги", href: "#services", screen: "services" },
  { label: "Стоимость услуг", href: "#price", screen: "price" },
  { label: "Отзывы", href: "#reviews", screen: "reviews" },
  { label: "Контакты", href: "#contacts", screen: "contacts" },
];

function Nav({ onMenuClick }) {
  const handleClick = (e, screen, href) => {
    e.preventDefault();
    onMenuClick(screen, href);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map(({ label, href, screen }) => (
          <li key={screen} className={styles.item}>
            <a
              href={href}
              className={styles.link}
              onClick={(e) => handleClick(e, screen, href)}
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
