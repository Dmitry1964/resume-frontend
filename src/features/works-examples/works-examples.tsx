import styles from './works-examples.module.scss';
import Livery from "src/shared/livery/livery";
import { TExampleItem } from 'src/types/types';

type WorksExamplesProps = {
  works: TExampleItem[];
  onLinkClick: (id: number) => void;
}

const WorksExamples = ({works, onLinkClick}: WorksExamplesProps): React.ReactNode => {
  return (
    <section className={styles.works_examples}>
      <Livery>
        <h2>Portfolio</h2>
      </Livery>
      <ul className={styles.works_examples__list}>
        {works.map((item) => (
          <li className={styles.works_examples__item} key={item.id}>
            <a onClick={() => onLinkClick(item.id)} href="#">
              <img src={item.img} alt='Пример роботы' />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
};

export default WorksExamples;
