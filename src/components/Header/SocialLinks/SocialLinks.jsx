import telegramIcon from "../../../assets/img/icons/telegram_logo_icon.svg";
import instagramIcon from "../../../assets/img/icons/instagram_logo_icon.svg";
import whatsappIcon from "../../../assets/img/icons/whatsapp_logo_icon.svg";
import styles from "./SocialLinks.module.css";

const LINKS = [
  { href: "https://t.me/AnastaziALappo", icon: telegramIcon, alt: "Telegram" },
  {
    href: "https://www.instagram.com/lapoanastazja/",
    icon: instagramIcon,
    alt: "Instagram",
  },
  { href: "https://wa.me/48571086455", icon: whatsappIcon, alt: "WhatsApp" },
];

function SocialLinks() {
  return (
    <div className={styles.social}>
      {LINKS.map(({ href, icon, alt }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <img src={icon} alt={alt} className={styles.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
