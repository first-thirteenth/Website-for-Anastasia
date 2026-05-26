import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Первичная консультация",
    description:
      "Разбираем вашу ситуацию, определяем подходящий способ легализации и составляем план действий.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h6" />
      </svg>
    ),
    title: "Вид на жительство (ВНЖ/ПМЖ)",
    description:
      "Помогаю оформить временный и постоянный вид на жительство (карта побыту): документы, запись, сопровождение.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l2 2" />
        <path d="M8 2.5A10 10 0 0 1 22 12" />
      </svg>
    ),
    title: "Гражданство",
    description:
      "Консультация и полное сопровождение в процессе получения польского гражданства: анализ оснований, документы, подача.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M12 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Разрешение на работу",
    description:
      "Оформление рабочей визы, зезволения на работу и уведомлений для работодателя по всем типам занятости.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12L12 3l9 9" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Карта поляка",
    description:
      "Консультация и сопровождение при получении Карты Поляка: проверка права, подготовка документов, подача.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M4 20V10l8-6 8 6v10" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
    title: "Регистрация бизнеса",
    description:
      "Открытие ИП (JDG) или компании в Польше: выбор формы, регистрация в CEIDG/KRS, налоговые вопросы.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Сопровождение в урженд",
    description:
      "Еду вместе с вами на приём в учреждение, помогаю с переводом, отвечаю на вопросы сотрудников.",
  },
];

function Services() {
  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.title}>Мои услуги</h2>
      <p className={styles.subtitle}>
        Юридическое сопровождение на всех этапах легализации в Польше
      </p>
      <ul className={styles.grid}>
        {SERVICES.map((s) => (
          <li key={s.title} className={styles.card}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
