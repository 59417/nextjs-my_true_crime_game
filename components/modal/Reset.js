import { useRouter } from "next/router";
import classes from './modal.module.scss';

export default function Reset() {
    const router = useRouter();
    const handleNo = () => {
        router.push('/main');
    };
    const handleYes = () => {
        router.replace('/');
    };
    return (
        <div className={classes.container}>
            <h1>Quit game to restart</h1>
            <p>
                Qutting will reset your record.
                <br/>Are you sure you want to <br/>quit the game?
            </p>
            <div className={classes.btn_group}>
                <button onClick={handleNo}>Cancel</button>
                <button onClick={handleYes}>OK</button>
            </div>
        </div>
    )
};