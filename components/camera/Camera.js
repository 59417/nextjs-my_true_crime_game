import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import classes from './Camera.module.scss';
import MyWebcam from "./MyWebcam";

export default function Camera(props) {

    const stageId = props.stageId;
    const [isTakingPhoto, setIsTakingPhoto] = useState(false);

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Link href={`/pass/${stageId}`}>
                    <button id={classes.back}>Back</button>
                </Link>
                <p>{isTakingPhoto && 'Take a screenshot to save the photo'}</p>
            </div>
            <MyWebcam setIsTakingPhoto={setIsTakingPhoto} />
        </div>
    )
};