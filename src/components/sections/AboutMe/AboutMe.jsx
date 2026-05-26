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
            Меня зовут <strong>Анастасия Лапо</strong>. Я специалист по
            легализации пребывания и трудоустройству иностранцев в Польше.
          </p>
          <p className={styles.text}>
            Помогаю разобраться в польском законодательстве, правильно оформить
            документы и пройти все процедуры — без стресса и лишних ошибок.
          </p>
          <p className={styles.text}>
            Работаю с клиентами из России, Беларуси, Украины и других стран.
            Провожу консультации онлайн и в Варшаве.
          </p>
          <ul className={styles.facts}>
            <li className={styles.fact}>
              <span className={styles.factNumber}>5+</span>
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
