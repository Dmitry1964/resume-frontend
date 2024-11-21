import UserInfo from '../user-info/user-info';
import styles from './main.module.scss';

const Main = (): React.ReactNode => (
  <main className={styles.page_main}>
    <div className={styles.page_main__wrapper}>
      <UserInfo />
      <section>

      </section>
    </div>
  </main>
)

export default Main;
