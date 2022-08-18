import Link from 'next/link';
import { useEffect, useState } from 'react';
import classes from './Pass.module.scss';
import { profilingData } from '../data/profiles';


export default function Pass(props) {

    const stageId = props.stageId;
    const [allPass, setAllpass] = useState([]);
    const profiles = profilingData.find(obj => obj.stageId === stageId);

    useEffect(() => {
        const localStorageState = JSON.parse(localStorage.getItem("state"));
        const passArr = Object.keys(localStorageState.pass).map(
            (key, idx) => localStorageState.pass[key]
        );
        setAllpass(passArr);
        
        const currPass = localStorageState.pass[stageId.toString()];
        if (!currPass) {
            localStorageState.pass[stageId.toString()] = true;
            localStorage.setItem("state", JSON.stringify(localStorageState));
            passArr[stageId.toString()-1] = true;
            setAllpass(passArr);
        };
    }, []);

    const getNextHref = () => {
        const isAllPass = !allPass.includes(false);
        return isAllPass ? '/finale' : '/main';
    };

    return (
        <div className={classes.content}>
            <h1>
                Mission {stageId} Completed
            </h1>
            <Link href={`/camera8/${stageId}`}>
                <button id={classes.photo_btn}>Take A Photo&emsp;
                    <img src="/photo-camera.png" alt="photo" width="14px" height="14px" id={classes.photo_icon} />
                </button>
            </Link>
            <p>{profiles.name} Profile: </p>
            <ul>
                <li><strong>Characteristics: </strong> 
                    <br/>{profiles.characteristics}</li>
                <li><strong>Victims: </strong>
                    <br/>{profiles.victims}</li>
                <li><strong>Method of murder: </strong>
                    <br/>{profiles.method}</li>
                <a href={profiles.link} target="_blank" rel="noopener noreferrer">see more</a>
            </ul>
            <Link href={getNextHref()}>
                <button>Next</button>
            </Link>
        </div>
    )
};