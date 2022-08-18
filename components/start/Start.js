import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import classes from './Start.module.scss';

export default function Start() {

    useEffect(() => { 
        const localStorageState = localStorage.getItem("state");
        const localStorageNickname = localStorage.getItem("nickname");
        if (localStorageState) {
            localStorage.removeItem("state");
        };
        if(localStorageNickname) {
            localStorage.removeItem("nickname");
        }
    }, []);

    const router = useRouter();
    const handleStart = () => {
        router.push('/modal/warning');
    }
    return (
        <Fragment>
            <h1 className={classes.title}>
                All About True Crime
            </h1>
            <div className={classes.wanted}>
                <div className={classes.text_wrapper}>
                    <h2>Wanted</h2>
                </div>
                <div className={classes.img_wrapper}>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/3067/3067572.png"
                        alt="game"
                    />
                </div>
                <div className={classes.text_wrapper}>
                    <p>$100,000,000</p>
                </div>
            </div>
            <button onClick={handleStart} id={classes.start_btn}>
                Start
            </button>
        </Fragment>
    )
};