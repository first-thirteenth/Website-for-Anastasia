import {
  ActionIcon,
  Avatar,
  Button,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { FiSun, FiMoon } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../../context/AuthContext";
import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { label: "Главная", screen: "home" },
  { label: "Обо мне", screen: "about" },
  { label: "Мои услуги", screen: "services" },
  { label: "Стоимость услуг", screen: "price" },
  { label: "Отзывы", screen: "reviews" },
  { label: "Контакты", screen: "contacts" },
];

function Nav({ onMenuClick, activePage }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { currentUser, signInWithGoogle, signOut } = useAuth();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map(({ label, screen }) => (
          <li key={screen} className={styles.item}>
            <a
              href="#"
              className={`${styles.link} ${activePage === screen ? styles.active : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onMenuClick(screen);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <Tooltip
          label={colorScheme === "dark" ? "Светлая тема" : "Тёмная тема"}
          position="bottom"
        >
          <ActionIcon
            variant="subtle"
            color="gray"
            size="lg"
            onClick={toggleColorScheme}
            aria-label="Переключить тему"
          >
            {colorScheme === "dark" ? (
              <FiSun size={18} />
            ) : (
              <FiMoon size={18} />
            )}
          </ActionIcon>
        </Tooltip>

        {currentUser ? (
          <Tooltip
            label={`Выйти (${currentUser.displayName})`}
            position="bottom"
          >
            <Avatar
              src={currentUser.photoURL}
              size="sm"
              radius="xl"
              className={styles.avatar}
              onClick={signOut}
            />
          </Tooltip>
        ) : (
          <Button
            size="xs"
            variant="subtle"
            leftSection={<FcGoogle size={16} />}
            onClick={signInWithGoogle}
            className={styles.loginBtn}
          >
            Войти
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
