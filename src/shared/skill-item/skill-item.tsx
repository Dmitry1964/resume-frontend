import { useEffect, useRef } from 'react';
import styles from './skill-item.module.scss';
import { TSkillItem } from "src/types/types";


type SkillItemProps = {
  skill: TSkillItem;
}

const SkillItem = ({ skill }: SkillItemProps): React.ReactNode => {
  const range = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (range.current) {
      range.current.style.width = `${skill.level}%`;
    }
  })
  return (
    <div className={styles.skill_item}>
      <span>{skill.name}</span>
      <div className={styles.skill_item__level}>
        <div className={styles.skill_item__track}></div>
        <div className={styles.skill_item__range} ref={range}></div>
      </div>
    </div>
  );
}
export default SkillItem;
