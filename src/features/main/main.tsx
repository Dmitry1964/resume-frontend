import { useEffect, useState } from 'react';
import Modal from '../modal/modal';
import UserInfo from '../user-info/user-info';
import WorksExamples from '../works-examples/works-examples';
import styles from './main.module.scss';
import { examples } from 'src/shared/constants';
import { TExampleItem } from 'src/types/types';

const Main = (): React.ReactNode => {
const [modal, setModal] = useState(false);
const [modalData, setModalData] = useState<TExampleItem>({
  description:'',
  href: '',
  id: 1,
  img: '',
  imgModal: '',
  name: ''
});

const handleExample = (id: number) => {
  const data = examples.find((item) => item.id === id);
  setModalData({...modalData,
    description: data?.description || '',
    href: data?.href || '',
    id: data?.id || 1,
    img: data?.img || '',
    imgModal: data?.imgModal || '',
    name: data?.name || ''
  })
  setModal(!modal)
}

const handleCloseButton = () => {
  setModal(!modal)
}

useEffect(() => {
  const closeModal = (evt: {keyCode: number}) => {
    if (evt.keyCode === 27) {
      setModal(false)
    }
  };
  window.addEventListener('keydown', closeModal)
  return () => {
    window.removeEventListener('keydown', closeModal)
  }
}, [])

  return (
    <main className={styles.page_main}>
      {modal &&
      <Modal project={modalData} onCloseBtnClick={handleCloseButton}/>}
      <UserInfo />
      <section className={styles.page_main__content}>
        <WorksExamples works={examples} onLinkClick={handleExample} />
      </section>
    </main>
  )
}
export default Main;
