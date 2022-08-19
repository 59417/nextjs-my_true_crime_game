import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Pass from '../../components/pass/Pass';


export default function GuideStage(props) {
  
  const stageId = props.stageId;
  const title = `My Game - Stage ${stageId}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Pass stageId={stageId} />
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
        { params: { passStageId: ele.toString() } }
    ));
    return {
      paths: paths,
      fallback: false, 
    }
  }
  

  export async function getStaticProps(context) {
      const currPage = context.params.passStageId;  // 1

      return {
      props: { stageId: parseInt(currPage) },
    }
  }
