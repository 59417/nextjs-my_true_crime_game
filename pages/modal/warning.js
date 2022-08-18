import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Warning from '../../components/modal/Warning';

export default function ModalWarning() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Game</title>
        <meta name="description" content="My game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Warning />
      </main>

      <footer className={styles.footer}>
        <h2>Open the website on your mobile device</h2>
      </footer>
    </div>
  )
};
