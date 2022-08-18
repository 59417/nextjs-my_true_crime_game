import Head from 'next/head';
import Modal from 'react-modal';
import styles from '../../styles/Home.module.css';
import Camera from '../../components/camera/Camera';


Modal.setAppElement('#__next');

export default function CameraStage(props) {
  
  const camStageId = props.camStageId;
  const title = `My Game - Stage ${camStageId}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Camera stageId={camStageId} />
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
        { params: { camStageId: ele.toString() } }
    ));
    return {
      paths: paths,
      fallback: false, 
    }
  }
  

  export async function getStaticProps(context) {
      const currPage = context.params.camStageId;  // 1
    return {
      props: { camStageId: parseInt(currPage) },
    }
  }
