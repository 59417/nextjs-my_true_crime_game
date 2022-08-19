import Head from 'next/head';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import styles from '../../styles/Home.module.css';
import Stage from '../../components/stage/Stage';
import Guide from '../../components/modal/Guide';
import { GuideStyle } from '../../components/modal/modalStyle';



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
        <Stage stageId={guideId} />

        <Modal 
          isOpen={true} 
          onRequestClose={() => router.back()}
          style={GuideStyle()}
        >
          <Guide stageId={guideId} />
        </Modal>
      </main>

      <footer className={styles.footer}>
        <h2>Open the website on your mobile device</h2>
      </footer>
    </div>
  )
};


export async function getStaticPaths() {
    const ids = Array.from({length: 4}, (v,k) => k+1);
    const paths = ids.map(ele => (
        { params: { guideId: `guide${ele}` } }
    ));
    return {
      paths: paths,
      fallback: false, 
    }
  }
  

  export async function getStaticProps(context) {
      const currPage = context.params.guideId;  // guide1
      const currId = currPage.slice(5,);
    return {
      props: { guideId: parseInt(currId) },
    }
  }
