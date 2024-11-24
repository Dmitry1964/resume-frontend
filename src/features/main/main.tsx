import UserInfo from '../user-info/user-info';
import WorksExamples from '../works-examples/works-examples';
import styles from './main.module.scss';

const Main = (): React.ReactNode => (
  <main className={styles.page_main}>
      <UserInfo />
      <section className={styles.page_main__content}>
        <WorksExamples />
      </section>
  </main>
)

export default Main;
