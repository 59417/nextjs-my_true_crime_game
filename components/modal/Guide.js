import { useRouter } from 'next/router';
import { useEffect } from 'react';
import classes from './modal.module.scss';


export default function Guide(props) {
    
    const id = props.stageId;

    useEffect(() => { 
        const localStorageState = JSON.parse(localStorage.getItem("state"));
        const isVisited = localStorageState.visited[id.toString()];
        if (!isVisited) {
            localStorageState.visited[id.toString()] = true;
            localStorage.setItem("state", JSON.stringify(localStorageState));
        };
    }, []);

    const router = useRouter();
    const handleClose = () => {
        router.replace(`/stage${id}`);
    };

    return (
        <div className={classes.container}>
            <h1>Guide</h1>
            <ul>
                <li>Information about criminals can be found on &ensp;
                    <a href="http://www.murderpedia.org" target="_blank" rel="noopener noreferrer">MURDERPEDIA</a>
                </li>
                <li>You can enter the criminal&#39;s name or other aliases in the answer field</li>
                <li>Note that answers cannot be misspelled or mixed with redundant symbols</li>
                <li>Reference:&ensp;
                    <a href="http://www.murderpedia.org" target="_blank" rel="noopener noreferrer">MURDERPEDIA</a>
                </li>
            </ul>
            <button onClick={handleClose}>Close</button>
        </div>
    )
};