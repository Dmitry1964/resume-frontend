import styles from './contact-item.module.scss';
import { TContactItem } from 'src/types/types';

type TContactItenProps = {
  contact: TContactItem
}

const ContactItem = ({contact}: TContactItenProps): React.ReactNode => (
  <a href={contact.type} className={styles.contact} target='_blank'>
    <img src={contact.imgPath} width={80} alt={contact.alt} />
    <span>{contact.contact}</span>
  </a>
);

export default ContactItem;
