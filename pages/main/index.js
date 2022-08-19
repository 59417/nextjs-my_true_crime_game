import Head from 'next/head';
import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from '../../styles/Home.module.css';
import Main from '../../components/main/Main';
// import TestBtn from '../../components/TestBtn';
import Reset from '../../components/modal/Reset'; 
import Help from '../../components/modal/Help';
import { HelpStyle, QuitStyle } from '../../components/modal/modalStyle';


Modal.setAppElement('#__next'); 

export default function PageMain() {
    
    const router = useRouter();
    const isHelpRouter = router.query.modalHelp;
    const isResetRouter = router.query.modalReset;

    // for testing
    // const [testState, setTestState] = useState(null);
    // useEffect(() => {
    // },[testState, setTestState])

    return (
        <div className={styles.container}>
            <Head>
                <title>My Game - Story</title>
                <meta name="description" content="The story of my game" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} >
                {/* <TestBtn setTestState={setTestState}/> */}
                <Main isHelpOpen={isHelpRouter}  /> 
                {/* isTest={testState}  // for testing */}

                <Modal isOpen={!!isResetRouter} style={QuitStyle()} >
                    <Reset />
                </Modal>

                <Modal isOpen={!!isHelpRouter} style={HelpStyle()} >
                    <Help />
                </Modal>
            </main>

            <footer className={styles.footer}>
                <h2>Open the website on your mobile device</h2>
            </footer>
        </div>
    )
};
