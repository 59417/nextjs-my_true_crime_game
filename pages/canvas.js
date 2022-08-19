import Head from "next/head";
import styles from '../styles/Home.module.css';
import MyCanvas from "../components/camera/MyCanvas";


export default function PageCanvas() {

    return (
        <div className={styles.container}>
            <Head>
                <title>My Game - Story</title>
                <meta name="description" content="The story of my game" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} >
                <MyCanvas />
            </main>

            <footer className={styles.footer}>
                <h2>Open the website on your mobile device</h2>
            </footer>
        </div>
    )
};
