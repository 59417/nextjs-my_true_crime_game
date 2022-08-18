import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Finale from '../components/finale/Finale';

export default function PageFinale() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Game - Ending</title>
        <meta name="description" content="The ending of my game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Finale />
      </main>

      <footer className={styles.footer}>
        <h2>Open the website on your mobile device</h2>
      </footer>
    </div>
  )
};
