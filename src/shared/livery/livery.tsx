import styles from './livery.module.scss';

type LiveryProps = {
  children: React.ReactNode;
}

const Livery = ({children}: LiveryProps): React.ReactNode => {
  return (
    <div className={styles.livery}>
      {children}
      <div className={styles.livery__right}></div>
    </div>
  )
};

export default Livery;
