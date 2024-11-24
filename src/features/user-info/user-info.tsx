import ContactItem from 'src/shared/contact-item/contact-item';
import styles from './user-info.module.scss';
import { userContacts, userSkills, userSoftWare } from 'src/shared/constants';
import SkillItem from 'src/shared/skill-item/skill-item';

const UserInfo = (): React.ReactNode => (
  <aside className={styles.user_info}>
    <div className={styles.user_info__contacts}>
      <h2>CONTAKT</h2>
      <ul className={styles.user_info__list}>
        {userContacts.map((item) => (
          <li key={item.contact}>
            <ContactItem contact={item} />
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.user_info__skills}>
      <h2>SKILL</h2>
      <ul className={styles.user_info__list}>
        {userSkills.map((item) =>(
          <li key={item.name}>
            <SkillItem skill={item}/>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.user_info__software}>
      <h2>SOFTWARE</h2>
      <ul className={styles.user_info__list}>
        {userSoftWare.map((item) => (
          <li key={item.name}>
            <SkillItem skill={item}/>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default UserInfo;
