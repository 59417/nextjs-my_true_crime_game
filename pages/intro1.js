import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Intro1 from '../components/intro/Intro1';

export default function PageIntro1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Game - Story</title>
        <meta name="description" content="The story of my game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro1 />
      </main>

      <footer className={styles.footer}>
        <h2>Open the website on your mobile device</h2>
      </footer>
    </div>
  )
};
