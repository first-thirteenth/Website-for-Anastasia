import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./SocialLinks.module.css";

const LINKS = [
  {
    href: "https://t.me/AnastaziALappo",
    Icon: FaTelegramPlane,
    label: "Telegram",
  },
  {
    href: "https://www.instagram.com/lapoanastazja/",
    Icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://wa.me/48571086455", Icon: FaWhatsapp, label: "WhatsApp" },
];

function SocialLinks({ fixed = false }) {
  return (
    <div className={`${styles.social} ${fixed ? styles.fixed : ""}`}>
      {LINKS.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={styles.link}
        >
          <Icon className={styles.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
