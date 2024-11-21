import styles from './container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
