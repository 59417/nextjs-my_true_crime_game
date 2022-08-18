import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Stage from '../../components/stage/Stage';


export default function PageStage(props) {

    const stageId = props.stageId;
    const title = `My Game - Stage ${stageId}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stage stageId={stageId} />
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
      { params: { stageId: `stage${ele}` } }
    ));
    return {
      paths: paths,
      fallback: false, 
    }
  }
  

  export async function getStaticProps(context) {
      const currPage = context.params.stageId;  // stage1
      const currId = currPage[currPage.length-1];
    return {
      props: { stageId: parseInt(currId) },
    }
  }
