import { useRouter } from "next/router";
import { Fragment } from 'react';
import classes from './Warning.module.scss';

export default function Warning() {
    const router = useRouter();
    const handleNext = () => {
        router.push('/modal/nickname');
    };
    const handlePrev = () => {
        router.replace('/');
    };
    return (
        <Fragment>
            <div className={classes.content}>
                <h1>WARNING</h1>
                <p>
                    THE FOLLOWING CONTENT MAY BE 
                    <br/>DISTURBING TO SOME VIEWERS
                    <br/>DISCRETION IS ADVISED
                    <br/>ONLY SUITABLE FOR PEOPLE 15+
                </p>
            </div>
            <div className={classes.btn_wrapper}>
                <button onClick={handlePrev} id={classes.quit}>Quit</button>
                <button onClick={handleNext} id={classes.continue}>Continue</button>
            </div>
        </Fragment>
    )
};