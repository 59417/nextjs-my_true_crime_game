import { useRouter } from "next/router";
import classes from '../common/Phase.module.scss';

export default function Intro1() {
    const router = useRouter();
    const handleNext = () => {
        router.push('/intro2');
    }
    return (
        <div className={classes.content}>
            <h1>Story</h1>
            <p>
                Recently, the sheriff turned to Detective Smart for help 
                investigating multiple murders that were believed to be highly related. 
                Det. Smart decides to look at past criminal records, 
                study the behavior of several prominent serial killers, 
                and conduct a criminal profile of those cases.</p>
            <button onClick={handleNext}>Next</button>
        </div>
    )
};