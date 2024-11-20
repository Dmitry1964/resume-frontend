import styles from './header.module.scss';
const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__avatar}>
        <img src="content/avatar.jpg" alt="" srcSet="content/avatar@2x.jpg" />
    </div>
    <div className={styles.header__content}>
      <div className={styles.header__border}>
        <div id='first'></div>
        <div id='second'></div>
        <div id='third'></div>
      </div>
    </div>
  <p>kdfkdkfdkfdk</p>
  </header>
);

export default Header;
