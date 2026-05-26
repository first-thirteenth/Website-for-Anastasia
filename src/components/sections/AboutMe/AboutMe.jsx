import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.photoWrapper}>
          <img
            src="/img/about/welcome.jpg"
            alt="Анастасия Лапо — специалист по легализации в Польше"
            className={styles.photo}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Обо мне</h2>
          <p className={styles.text}>
            Меня зовут <strong>Анастасия Лапо</strong>. Я юрист с практикой
            более 10 лет, специализируюсь на легализации и правовом
            сопровождении иностранцев в Польше.
          </p>
          <p className={styles.text}>
            Помогаю оформить ВНЖ/ПМЖ, Карту Поляка, гражданство, а также
            зарегистрировать бизнес (ИП и ООО) — без стресса и лишних ошибок.
          </p>
          <p className={styles.text}>
            Работаю с клиентами из Беларуси, Украины, России и других стран. Из
            Минска — в Гданьск. Консультирую онлайн и лично в Гданьске.
          </p>
          <ul className={styles.facts}>
            <li className={styles.fact}>
              <span className={styles.factNumber}>10+</span>
              <span className={styles.factLabel}>лет опыта</span>
            </li>
            <li className={styles.fact}>
              <span className={styles.factNumber}>200+</span>
              <span className={styles.factLabel}>довольных клиентов</span>
            </li>
            <li className={styles.fact}>
              <span className={styles.factNumber}>100%</span>
              <span className={styles.factLabel}>индивидуальный подход</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
