import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import Hint from '../../../components/stage/hint/Hint';


export default function HintPage(props) {

    const { hintStageId, hintId } = props;
    const title = `My Game - Stage ${hintStageId}`;

    return (
        <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="My Game" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Hint stageId={hintStageId} hintId={hintId}/>
        </main>
  
        <footer className={styles.footer}>
            <h2>Open the website on your mobile device</h2>
        </footer>
      </div>
    )
};


export async function getStaticPaths () {

    const hintStageId = [1,2,3,4];
    const hintId = [1,2,3];

    const pathIdArr = hintStageId.map(stageEle => {
        return hintId.map(hintEle => (
            { hintStageId: stageEle, hintId: hintEle}
        ));
    });
    const pathIds = [...pathIdArr].flat();

    return {
        fallback: 'blocking',  
        paths: pathIds.map(obj => ({
            params: {
                hintStageId: obj.hintStageId.toString(),
                hintId: obj.hintId.toString(),
            }
        })
    )};
};


export async function getStaticProps (context) {

    const { hintStageId, hintId } = context.params;
    
    return {
        props: {
            hintStageId: hintStageId,
            hintId: parseInt(hintId),
        }
    };
}


