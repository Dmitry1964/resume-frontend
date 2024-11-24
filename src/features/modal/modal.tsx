import { TExampleItem } from 'src/types/types';
import styles from './modal.module.scss';
import Container from '../container/container';


type ModalProps = {
  project: TExampleItem;
  onCloseBtnClick: () => void;
}

const Modal = ({ project, onCloseBtnClick }: ModalProps) => {
  const { name, imgModal, href } = project;
  return (
    <section className={styles.modal}>
      <Container>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__title}>
            <h2>{name}</h2>
            <button
            onClick={onCloseBtnClick}
              className={styles.modal__close_btn}
            />
          </div>
          <div className={styles.modal__content}>
            <img src={imgModal} alt="" />
            <a href={href} target='_blank'>Перейти</a>
          </div>

        </div>

      </Container>

    </section>
  )
}

export default Modal;
