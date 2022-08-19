import Head from 'next/head';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import styles from '../../styles/Home.module.css';
import Wrong from '../../components/modal/Wrong';
import { WrongStyle } from '../../components/modal/modalStyle';


Modal.setAppElement('#__next');

export default function GuideStage(props) {
  
  const guideId = props.guideId;
  const title = `My Game - Stage ${guideId}`;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Modal 
            isOpen={true} 
            onRequestClose={() => router.back()}
            className={styles.modal}
            style={WrongStyle()}>
          <Wrong stageId={guideId} />
        </Modal>

      </main>

      <footer className={styles.footer}>
        <h2>Open the website on your mobile device</h2>
      </footer>
    </div>
  )
};
