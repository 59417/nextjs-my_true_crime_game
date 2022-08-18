import { useRouter } from 'next/router';
import classes from './modal.module.scss';

export default function Help() {
    const router = useRouter();
    const handleClose = () => {
        router.back();
    };

    return (
        <div className={classes.container}>
            <h1>Instructions</h1>
            <ul>
                <li>There are four missions in this game</li>
                <li>There are three tips for each mission level</li>
                <li>Complete all levels to help Watson to solve this case</li>
            </ul>
            <button onClick={handleClose}>Close</button>
        </div>
    )
};