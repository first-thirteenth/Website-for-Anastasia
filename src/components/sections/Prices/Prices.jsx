import styles from "./Prices.module.css";

const PLANS = [
  {
    name: "Консультация",
    price: "50 zł",
    duration: "60 мин",
    features: [
      "Анализ вашей ситуации",
      "Выбор способа легализации",
      "Список необходимых документов",
      "Ответы на все вопросы",
    ],
    highlight: false,
  },
  {
    name: "Сопровождение",
    price: "от 200 zł",
    duration: "под ключ",
    features: [
      "Всё из пакета «Консультация»",
      "Подготовка и проверка документов",
      "Запись в урженд",
      "Личное сопровождение на приём",
      "Поддержка до получения решения",
    ],
    highlight: true,
  },
  {
    name: "Бизнес",
    price: "от 350 zł",
    duration: "под ключ",
    features: [
      "Регистрация ИП или компании",
      "Консультация по налогам (ZUS, VAT)",
      "Помощь с банковским счётом",
      "Оформление разрешений на работу",
    ],
    highlight: false,
  },
];

function Prices() {
  return (
    <section id="price" className={styles.section}>
      <h2 className={styles.title}>Стоимость услуг</h2>
      <p className={styles.subtitle}>Прозрачные цены без скрытых платежей</p>
      <ul className={styles.grid}>
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ""}`}
          >
            {plan.highlight && <span className={styles.badge}>Популярный</span>}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.duration}>{plan.duration}</span>
            </div>
            <ul className={styles.features}>
              {plan.features.map((f) => (
                <li key={f} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        Точная стоимость зависит от сложности ситуации. Свяжитесь со мной для
        индивидуального расчёта.
      </p>
    </section>
  );
}

export default Prices;
