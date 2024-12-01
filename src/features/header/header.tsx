import styles from './header.module.scss';
const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__avatar}>
      <img src="content/avatar.jpg" alt="" srcSet="content/avatar@2x.jpg" />
    </div>
    <div className={styles.header__content}>
      <div className={styles.header__border}>
        <div id="first"></div>
        <div id="second"></div>
        <div id="third"></div>
      </div>
      <h2 className={styles.header__title}>Дмитрий Нос</h2>
      <ul className={styles.header__list}>
        <li>HTML-верстальщик</li>
        <li>Frontend developer</li>
        <li>React developer</li>
      </ul>
    </div>
  </header>
);

export default Header;
