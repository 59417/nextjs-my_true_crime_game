import { useRouter } from "next/router";
import classes from '../common/Phase.module.scss';


export default function Intro2() {
    const router = useRouter();
    const handleNext = () => {
        router.push('/main');
    }
    return (
        <div className={classes.content}>
            <h1>Instructions</h1>
            <ul>
                <li>In this game, you&#39;re Detective Smart&#39;s assistant, please helping him complete 4 small tasks.</li>
                <li>Each mission is to research a well-known serial killer in history.</li>
                <li>Please follow the clues to find out who the murderer of the picture is!</li>
                <li>Please enter the murderer&#39;s name or alias in the answer field of the mission.</li>
            </ul>
            <button onClick={handleNext} id={classes.intro2_ok}>OK</button>
        </div>
    )
};